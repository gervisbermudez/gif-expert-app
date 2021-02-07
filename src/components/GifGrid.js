import React, { useState } from 'react';
import GifCard from './GifCard';

import { useFetchGifs } from '../hooks/useFetchGifs'


const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs(category);

    console.log({ data, loading });

    return (
        <>
            <h3>{category}</h3>
            {
                loading ? (<div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                ) : (
                        <div className="card-columns">
                            {
                                data.map((img, index) => {
                                    return (
                                        <GifCard key={`${index}`} img={img}></GifCard>
                                    )
                                })
                            }
                        </div>
                    )
            }
        </>
    );
}

export default GifGrid;



