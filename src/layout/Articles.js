import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Articles extends Component {
    render() {
        return (
            <div className="articles simplebar">
                <div className="article">
                    <div className="article-bg" style={{backgroundImage: "url(/img/rlcs.jpg)"}}/>
                    <small>092697</small>
                    <h3>RLCS Season 9 Finals are here</h3>
                </div>
                <div className="article">
                    <div className="article-bg" style={{backgroundImage: "url(/img/rlcs.jpg)"}}/>
                    <small>092697</small>
                    <h3>RLCS Season 9 Finals are here</h3>
                </div>
                <div className="article">
                    <div className="article-bg" style={{backgroundImage: "url(/img/rlcs.jpg)"}}/>
                    <small>092697</small>
                    <h3>RLCS Season 9 Finals are here</h3>
                </div>
                <div className="article">
                    <div className="article-bg" style={{backgroundImage: "url(/img/rlcs.jpg)"}}/>
                    <small>092697</small>
                    <h3>RLCS Season 9 Finals are here</h3>
                </div>
            </div>
        );
    }
}

Articles.propTypes = {};

export default Articles;
