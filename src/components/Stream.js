// @flow
import * as React from 'react';

export function Stream(props) {
    const width = 512,
        height = 288;
    let newBG = props.backgroundImage.replace('{width}', width);
    newBG = newBG.replace('{height}', height);
    return (
        <div className="stream">
            <div className="stream-bg" style={{backgroundImage: `url(${newBG})`}} />
            <h3><span>{props.username}</span></h3>
            <p><i className="fa fa-circle"/> {props.viewerCount}</p>
        </div>
    );
};