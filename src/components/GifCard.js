import React from 'react';

const GifCard = ({ img }) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={img.url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{img.title}</h5>
                <a href={img.url} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default GifCard;