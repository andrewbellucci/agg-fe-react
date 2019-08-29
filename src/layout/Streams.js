import React, {Component, Fragment} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {Stream} from "../components/Stream";
import {Spinner} from "../components/Spinner";
import SimpleBar from "simplebar-react";

class Streams extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            streams: []
        };
    }
    componentDidMount() {
        // TODO hide Client-ID
        let config = {
            headers: {
                "Client-ID": "noy1jigieaw7ar6e79x7foozlt7ix0"
            }
        };
        let users = [
            "zy_tv",
            "quemzi",
            "saltyyyyyy",
            "OfficialAuzzi",
            "moeiswolf",
            "merkkkkk",
            "chillyduck",
            "mxtricide",
            "quanzee1",
            "Symfuhny",
            "SolaryFortnite",
            "KamoLRF",
            "SypherPK"
        ];
        let urlAddition = "";

        users.forEach((user, index) => {
            urlAddition += `user_login=${user}&`;
        });

        axios.get(`https://api.twitch.tv/helix/streams?${urlAddition}`, config)
            .then(res => {
                console.log(res.data.data)
                this.setState({
                    streams: [...res.data.data],
                    isLoading: false
                });
            });
    }



    render() {
        let fetchedStreams = this.state.streams.map(stream =>
            <Stream
                key={stream.id}
                username={stream.user_name}
                viewerCount={stream.viewer_count}
                backgroundImage={`${stream.thumbnail_url}`}
            />
        );

        return (
            <div className="live">
                <h2>Currently Live</h2>
                <div className="live-content">
                    <SimpleBar data-simplebar-force-visible>
                        {this.state.isLoading ? <Spinner /> : fetchedStreams}
                    </SimpleBar>
                </div>
            </div>
        );
    }
}

Streams.propTypes = {};

export default Streams;
