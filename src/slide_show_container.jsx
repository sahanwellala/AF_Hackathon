import React, {Component} from 'react';

import img_04 from '../resources/images/image_04.jpg';


export default class Slide_show_container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div class="main_image">
                <img src={img_04} alt="Logo"/>;
            </div>
        </div>;
    }
}