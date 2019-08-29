import React, {Component} from 'react';

class Tweet extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="tweet">
                <div className="meta">
                    <img src="https://via.placeholder.com/100x100" alt="" />
                    <p className="handle">@Avenge_GG</p>
                    <a href="#" className="view-tweet">View Tweet</a>
                </div>
                <div className="tweet-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fuga dignissimos fugit quia deserunt recusandae itaque repellendus alias praesentium obcaecati atque nam nesciunt officiis, facere laudantium laborum ratione, architecto error.</p>
                    <img src="https://via.placeholder.com/500x200" alt="" />
                </div>
            </div>
        );
    }
}

export default Tweet;