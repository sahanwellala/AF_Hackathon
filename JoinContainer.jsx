'use strict';
import React, {Component} from 'react';
export default class JoinContainer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <div>Join Community</div>
            <div id='cssmenu'>
                <li className='active'><a href='#'><span>Register</span></a></li>
                <li><a href='#'><span>Members</span></a></li>
                <li><a href='#'><span>Rating</span></a></li>
            </div>
            <div>
                {/*This disply a list*/}
            </div>
        </div>;
    }
}

