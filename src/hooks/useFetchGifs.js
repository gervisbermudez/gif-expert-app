import { useState, useEffect } from 'react';
import { getGift } from '../utils/getGifs'


export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGift(category).then(gifs => {
            setTimeout(() => {
                setState(
                    {
                        data: gifs,
                        loading: false
                    }
                );
            }, 1500);
        });
    }, [category]);

    return state;
};