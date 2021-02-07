import React from 'react';
import GifCard from './GifCard';
import { useFetchGifs } from '../hooks/useFetchGifs'

const GifGrid = ({ category }) => {
    const { data, loading } = useFetchGifs(category);
    return (
        <>
            {
                loading ? (<div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                ) : (
                    <div className="card-columns">
                            <h3>{category}</h3>
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



