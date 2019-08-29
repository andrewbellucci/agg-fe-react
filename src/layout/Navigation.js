// @flow
import * as React from 'react';

const hamburger = () => {
    document.querySelector('.hamburger').classList.toggle('active');
    document.querySelector('#root').classList.toggle('nav-active');
}

export function Navigation(props) {
    return (
        <nav>
            <div className="hamburger" onClick={() => {hamburger()}}>
                <img src="/img/icon/sm-ham.svg" alt="" className="top" />
                <img src="/img/icon/mid-ham.svg" alt="" className="mid" />
                <img src="/img/icon/sm-ham.svg" alt="" className="bottom" />
            </div>
            <div className="navigation">
                <a href="#" className="nav-item">
                    <div className="nav-icon">
                        <i className="fas fa-tachometer-alt"/>
                    </div>
                    <span className="nav-text">Dashboard</span>
                </a>
                <a href="#" className="nav-item">
                    <div className="nav-icon">
                        <i className="fas fa-users"/>
                    </div>
                    <span className="nav-text">Teams</span>
                </a>
                <a href="#" className="nav-item">
                    <div className="nav-icon">
                        <i className="fab fa-twitch"/>
                    </div>
                    <span className="nav-text">Live Streams</span>
                </a>
                <a href="#" className="nav-item">
                    <div className="nav-icon">
                        <i className="fas fa-newspaper"/>
                    </div>
                    <span className="nav-text">News</span>
                </a>
                <a href="https://aporiacustoms.com/stores/avengegg/" target="_blank" rel="noreferrer noopener"
                   className="nav-item">
                    <div className="nav-icon">
                        <i className="fas fa-shopping-basket"/>
                    </div>
                    <span className="nav-text">Shop Avenge</span>
                </a>
            </div>
        </nav>
    );
};