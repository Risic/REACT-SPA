import React from "react";
import Author from "./Author";
import Stats from "./Stats";

import anakinPhoto from "../images/Anakin.webp";
import commentSvg from "../images/stat-icon/comment.svg";
import likeSvg from "../images/stat-icon/like.svg";
import replySvg from "../images/stat-icon/reply.svg";

const ANAKIN_IMAGE = anakinPhoto;

const anakin = {
    name: "Anakin Skywalker",
    photo: ANAKIN_IMAGE,
    nickname: "@dart_vader"
};

const statistics = {
    comments: {
        count: 312,
        icon: commentSvg
    },
    reply: {
        count: 256,
        icon: replySvg
    },
    likes: {
        count: 724,
        icon: likeSvg
    }
};

const Post = ({content, image, date}) => {
    
    return(
        <div className="post">
            <div className="post-header">
                <Author name={anakin.name} photo={anakin.photo} nickname={anakin.nickname}/>
                <div className="post-date">{date}</div>
            </div>
            <div className="post-content">
                <p className="content-text">{content}</p>
                <img className="content-picture" src={image} alt="Post's pictures"/>
                <Stats comments={statistics.comments} reply={statistics.reply} likes={statistics.likes}/>
            </div>
        </div>
    )
}

export default Post