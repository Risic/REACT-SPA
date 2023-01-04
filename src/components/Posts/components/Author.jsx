import React from "react";

const Author = ({name, photo, nickname}) => {
    return (
        <div className="post-author">
            <img className="author-photo" src={photo} alt="Profile avatar"/>
            <div className="author-name">{name}</div>
            <div className="author-nick">{nickname}</div>
        </div>
    )
}

export default Author