'use strict';
import React, {Component} from 'react';

export default class NavContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div id='cssmenu'>
                <ul>
                    <li className='active'><a href='#'><span>Home</span></a></li>
                    <li><a href='#'><span>Projects</span></a></li>
                    <li><a href='#'><span>Community</span></a></li>
                    <li className='last'><a href='#'><span>Gallery</span></a></li>
                    <li><a href='#'><span>Login</span></a></li>
                    <li><a href='#'><span>Register</span></a></li>
                </ul>
            </div>
        </div>;
    }
}