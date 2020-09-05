import React, { useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import './Sidebar.css';

function Sidebar({ shares, messages, likes }) {
    const [liked, setLiked] = useState(false);
    return (
        <div className="sidebar">
            <div className="sidebar__button">
                {liked ? (
                    <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
                ) : (
                        <FavoriteBorderIcon fontSize="large" onClick={(e) => setLiked(true)} />
                    )}
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="sidebar__button">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="sidebar__button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default Sidebar;
