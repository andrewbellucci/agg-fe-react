import React, {Component} from 'react';
import SimpleBar from "simplebar-react";
import Tweet from "./Tweet";

class TwitterFeed extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="twitter-feed">
                <h3>Twitter Feed</h3>
                <div className="feed-section">
                    <SimpleBar data-simplebar-force-visible>
                        <Tweet />
                    </SimpleBar>
                </div>
            </div>
        );
    }
}

export default TwitterFeed;