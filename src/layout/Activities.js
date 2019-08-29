import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Activities extends Component {
    render() {
        return (
            <div className="activity">
                <h2>Past Activity</h2>
                <div className="activity-content simplebar" data-simplebar>
                    <div className="activity-item">
                        <div className="heading">
                            <h3>Event Title</h3>
                            <p>092619</p>
                        </div>
                        <div className="score-card">
                            <div className="main-team">
                                <p className="score tie">2</p>
                                <p className="team-name">Avenge</p>
                            </div>
                            <div className="versus">
                                <p>vs</p>
                            </div>
                            <div className="other-team">
                                <p className="score tie">2</p>
                                <p className="team-name">FaZe</p>
                            </div>
                        </div>
                    </div>
                    <div className="activity-item">
                        <div className="heading">
                            <h3>Event Title</h3>
                            <p>092619</p>
                        </div>
                        <div className="text">
                            <img src="/img/thumb.png" alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequuntur
                                    blanditiis et consequatur dignissimos aut similique, earum quidem maxime molestiae
                                    accusantium maiores? Veniam necessitatibus ipsam aspernatur ducimus, reprehenderit
                                    perspiciatis quasi!</p>
                        </div>
                    </div>
                    <div className="activity-item">
                        <div className="heading">
                            <h3>Event Title</h3>
                            <p>092619</p>
                        </div>
                        <div className="score-card">
                            <div className="main-team">
                                <p className="score winner">4</p>
                                <p className="team-name">Avenge</p>
                            </div>
                            <div className="versus">
                                <p>vs</p>
                            </div>
                            <div className="other-team">
                                <p className="score loser">2</p>
                                <p className="team-name">FaZe</p>
                            </div>
                        </div>
                        <div className="score-card">
                            <div className="main-team">
                                <p className="score winner">4</p>
                                <p className="team-name">Avenge</p>
                            </div>
                            <div className="versus">
                                <p>vs</p>
                            </div>
                            <div className="other-team">
                                <p className="score loser">2</p>
                                <p className="team-name">FaZe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Activities.propTypes = {};

export default Activities;
