import React, { Component } from "react";
import { RegisterRequest } from "../services/fetch-service";

import '../sass/login-page.sass'

export default class LoginPage extends Component {
    constructor() {
        super();
        this.state =  {
            username: '',
            password: '',
            buttonActive: false,
            status: ''
        }
        this.onUsernameChanged = this.onUsernameChanged.bind(this)
        this.onPasswordChanged = this.onPasswordChanged.bind(this)
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

    async sendData(e) {
        e.preventDefault()
        const { username, password } = this.state;
        if (username.length < 6 || password.length < 6) {
            return
        }
        // console.log(RegisterRequest(username, password))
        RegisterRequest(username, password).then(answer => {
            this.setState({
                status: answer.answer
            })
        })
    }

    render() {
        return (
            <section>
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
                        <button type="submit" className="btn btn-primary" disabled={!this.state.buttonActive} onClick={this.sendData}>Register</button>
                        <p className="register-status">{this.state.status}</p>
                    </div>
                </form>
            </section>
        )
    }
}