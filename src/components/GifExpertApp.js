import React, { useState } from 'react';
import CategorieAdd from './CategorieAdd';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(["One Punch", "Samurai X", "Dragon Ball"]);

    return (
        <div className="container">
            <h2>GifExpertApp</h2>
            <hr />
            <CategorieAdd setCategories={setCategories} />
            <ul>
                {
                    categories.map((categorie) => {
                        return (<li key={categorie}>{categorie}</li>);
                    })
                }
            </ul>
        </div>
    );
}

export default GifExpertApp;