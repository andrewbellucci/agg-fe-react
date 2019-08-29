import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TwitterFeed from "../components/TwitterFeed";

class Miscellaneous extends Component {
    render() {
        return (
            <div className="misc">
                <h2>Miscellaneous</h2>
                <div className="misc-content">
                    <div className="teams">
                        <div className="teams-count">
                            <p className="number">3</p>
                            <p className="label">Teams</p>
                        </div>
                        <div className="gamers-count">
                            <p className="number">14</p>
                            <p className="label">Gamers</p>
                        </div>
                        <div className="unlimited">
                            <p className="number infinity"><img src="/img/icon/infinity-solid.svg" alt="" /></p>
                            <p className="label">Possibilities</p>
                        </div>
                    </div>
                    <TwitterFeed />
                </div>
            </div>
        );
    }
}

Miscellaneous.propTypes = {};

export default Miscellaneous;
