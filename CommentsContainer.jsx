'use strict';
import React, {Component} from 'react';
export default class CommentsContainer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <h2>Project Title 01</h2>
            <div className="topnav">
                <div className="search-container">
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search">
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </input>
                    </form>
                </div>
            </div>
            <div>
                <form onSubmit={event => this.onSubmit(event)}>
                    <label>Add Comment..:</label>
                    <input type="text" onChange={event => this.onNameChange(event)}/>
                    <button type="Enter">Add</button>
                </form>
            </div>
            {/*In this section UI displays the search bar that can search projects and add a comment*/}
        </div>;
    }
}

