'use strict';

import React, {Component} from 'react';
import "./logincss.css";
import img1 from "./images/login.png";


export default class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="logincss" >

        <form action="https://www.travelmole.com/news_feature.php?news_id=2012262" method="post">

                <img src={img1} alt="logo" height="250" width="250"/><br/>
                <label htmlFor="uname"><b>Username &nbsp;</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/><br/>
                <label htmlFor="psw"><b>Password &nbsp;</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/><br/>
                <button type="submit">Login</button><br/>
                <a href=""> Didn't have account?sing up</a>

        </form>

        </div>;
    }
}
