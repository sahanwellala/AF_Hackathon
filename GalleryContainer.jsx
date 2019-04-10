'use strict';
import React, {Component} from 'react';
export default class GalleryContainer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <div>
                <h2>Project Title</h2>
            </div>
            <div className="topnav">
                <div className="search-container">
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search">
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </input>
                    </form>
                </div>
                {/*In this section, We can search projects*/}
            </div>
            <div>
                {/*Display image list*/}
            </div>
        </div>
    }
}

