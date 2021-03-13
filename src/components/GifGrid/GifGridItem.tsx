import React from "react";
import { Gif } from "./GifGrid";
import './GifGridItem.css'

export const GifGridItem = ({ id, title, url }: Gif) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={url} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    {/* <p className="card-text"></p> */}
                </div>
            </div>
        </div>
    );
};
