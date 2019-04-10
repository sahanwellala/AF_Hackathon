'use strict';

import React, {Component} from 'react';
import "./logincss.css";
import img1 from "./images/login.png";

export default class register extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="logincss">
            <form action="" method="post">

                <h2> Registration</h2>

                <img src={img1} alt="logo" height="250" width="250"/><br/>
                <a href=""> Choose a image </a><br/>


                <input type="text" placeholder="Enter First name" name="fname" required/><br/>

                <input type="text" placeholder="Enter Last name" name="lname" required/><br/>

                <input type="text" placeholder="Enter email" name="email" required/><br/>

                <input type="text" placeholder="Enter Contact No" name="ContactNo" required/><br/>

                <input type="text" placeholder="Enter Username" name="uname" required/><br/>

                <input type="password" placeholder="Enter Password" name="psw" required/><br/>

                <input type="password" placeholder="Enter Confirm Password" name="cpsw" required/><br/>

                <button type="submit" value="Submit">submit</button>

            </form>
        </div>;
    }
}
