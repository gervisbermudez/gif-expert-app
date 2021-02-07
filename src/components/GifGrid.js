import React, { useEffect, useState } from 'react';
import GifCard from './GifCard';
import { getGift } from '../utils/getGifs'


const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGift(category).then(setImages);
    }, [category]);

    return (
        <>
            <h3>{category}</h3>
            <div className="card-columns">
                {
                    images.map((img, index) => {
                        return (
                            <GifCard key={`${index}`} img={img}></GifCard>
                        )
                    })
                }
            </div>
        </>
    );
}

export default GifGrid;



