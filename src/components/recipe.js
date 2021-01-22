import React from 'react';


function Recipe({ title, calories, ingredients, image }) {

    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <h3>Ingredients</h3>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img alt="recipe_image" src={image} />
        </div>

    )

}


export default Recipe;
