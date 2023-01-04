import React, {useState} from "react";

const StatsItem = ({count, icon, text}) => {
    const [num, setNum] = useState(count);
    return(
        <div className="statItem">
            <button className="stat-button" onClick={() => {
                    setNum((num) => num += 1)
                }}>
                <img src={icon} alt={text} />
                <span>{num}</span>
            </button>
        </div>
    )
}

export default StatsItem