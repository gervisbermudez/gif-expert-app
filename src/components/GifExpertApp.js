import React, { useState } from 'react';
import CategorieAdd from './CategorieAdd';
import GifGrid from './GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Pokemon"]);

    return (
        <div className="container">
            <h2>GifExpertApp</h2>
            <hr />
            <CategorieAdd setCategories={setCategories} />
            {
                categories.map((category) => {
                    return (<GifGrid category={category} key={category} />);
                })
            }
        </div>
    );
}

export default GifExpertApp;