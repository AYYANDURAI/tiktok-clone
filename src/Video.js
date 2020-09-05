import React, { useRef, useState } from 'react';
import VideoFooter from './VideoFooter';
import Sidebar from './Sidebar';
import './Video.css';

function Video({ url, messages, channel, description, likes, shares, song }) {
    const [play, setPlay] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (play) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    }
    return (
        <div className="video">
            <video
                className="video_player"
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src={url}
            >
            </video>
            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />
            <Sidebar likes={likes} messages={messages} shares={shares} />
        </div>
    )
}

export default Video;
