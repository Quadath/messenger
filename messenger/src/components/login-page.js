import React, { Component } from "react";
import { RegisterRequest, LoginRequest } from "../services/fetch-service";

import '../sass/login-page.sass'

export default class LoginPage extends Component {
    constructor() {
        super();
        this.state =  {
            username: '',
            password: '',
            buttonActive: false,
            mode: 'register',
            status: ''
        }
        this.onUsernameChanged = this.onUsernameChanged.bind(this)
        this.onPasswordChanged = this.onPasswordChanged.bind(this)
        this.onModeChanged = this.onModeChanged.bind(this)
        this.sendData = this.sendData.bind(this)
    
    }
    
    onUsernameChanged(e) {
        const text = e.target.value.replace(/[^a-z0-9]/gi,'').slice(0, 16);
        this.setState({
            username: text,
            buttonActive: text.length >= 6 && this.state.password.length >= 6
        })
    }
    onPasswordChanged(e) {
        const text = e.target.value.replace(/[^a-z0-9]/gi,'').slice(0, 16);
        this.setState({
            password: text,
            buttonActive: text.length >= 6 && this.state.username.length >= 6
        })
    }
    onModeChanged() {
        const { mode } = this.state;
        if (mode === 'register') {
            this.setState({
                mode: 'login'
            })
        } else {
            this.setState({
                mode: 'register'
            })
        }
    }

    async sendData(e) {
        e.preventDefault()
        const { username, password, mode } = this.state;
        if (username.length < 6 || password.length < 6) {
            return
        }
        if (mode === 'register'){
            RegisterRequest(username, password).then(answer => {
                this.setState({
                    status: answer.answer
                })
            })
        } else {
            LoginRequest(username, password).then(answer => {
                console.log(answer)
                if (answer.answer === 'Succesfully logged!') {
                    this.LoginSuccess(username, password)
                }
                this.setState({
                    status: answer.answer
                })
            })
        }
    }
    LoginSuccess(username, password) {
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
    }

    render() {
        const {mode} = this.state
        let title = mode === 'register' ? 'Create account' : 'Sign in';
        let subtitle = mode === 'register' ? 
        {message: 'Already have account?', link: 'Sign in'} : 
        {message: "Don't have account yet?", link: 'Create account'}
        return (
            <section>
                <h2 className="register-form-title">{title}</h2>
                <form style={{width: "400px", border: "1px solid black", padding: "10px", margin: "40px auto"}}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">Username</label>
                        <input className="form-control" id="username" aria-describedby="emailHelp" onChange={this.onUsernameChanged} value={this.state.username}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password"  onChange={this.onPasswordChanged} value={this.state.password}/>
                        <div id="emailHelp" className="form-text">A-z, 0-9, from 6 characters.</div>
                    </div>
                    <div className="d-flex flex-row">
                        <button type="submit" className="btn btn-primary" disabled={!this.state.buttonActive} onClick={this.sendData}>{mode}</button>
                        <p className="register-status">{this.state.status}</p>
                    </div>
                </form>
                <h6 className="register-form-subtitle">{subtitle.message} <b onClick={this.onModeChanged}>{subtitle.link}</b></h6>
            </section>
        )
    }
}