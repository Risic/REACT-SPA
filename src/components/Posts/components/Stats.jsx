import React from "react";
import StatsItem from "./StatsItem";

import shareSvg from "../images/stat-icon/share.svg"

const Stats = ({comments, reply, likes}) => {
    return (
        <div className="post-stats">
            <StatsItem count={comments.count} icon={comments.icon} text={"Comments"}></StatsItem>
            <StatsItem count={reply.count} icon={reply.icon} text={"Reply"}></StatsItem>
            <StatsItem count={likes.count} icon={likes.icon} text={"Likes"}></StatsItem>
            <div className="statItem">
                <button className="stat-button">
                    <img src={shareSvg} alt="Share" />
                </button>
            </div>
        </div>
    )
}

export default Stats