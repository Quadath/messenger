import React from "react";
import '../sass/app-header.sass'

const AppHeader = (props) => {
    return (
        <div className="app-header">
            {props.children}
        </div>
    )
}
export default AppHeader