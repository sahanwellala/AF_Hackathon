'use strict';
import React, {Component} from 'react';
import img_01 from './Image/image.jpg';
export default class HomeContainer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <div>
                <div id='cssmenu'>
                    <ul>
                        <li className='active'><a href='#join'><span>Join</span></a></li>
                        <li><a href='#gallery'><span>Photo Gallery</span></a></li>
                        <li><a href='#comments'><span>Comments</span></a></li>
                    </ul>
                </div>
                <tr>
                    <td><img src={img_01} alt="Logo"/><br/><br/></td>
                </tr>
            <p>This is the complete description of the project..................</p>
            </div>;
    }
}

