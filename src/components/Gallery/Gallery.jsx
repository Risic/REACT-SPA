import React from "react";
import IMAGES from './initImage';

const images = Object.values(IMAGES)

const Gallery = () => {
    return (
        <>
        <p className="title">Hover</p>
        <div className="gallery">
            {
                images.map((element) => {
                    return (
                        <div key={element} className="gallery-item">
                            <a target="_blank" rel="noreferrer" href={element}>
                                <img src={element} alt="pic" />
                            </a>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Gallery