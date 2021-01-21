import React from 'react';


function Recipe ({title, calories, ingredients, image}){

    return(
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            {/* <h2>Ingredients</h2> */}
            {/* <p>{ingredients.map(ingredient=>(
                <ol>
                    <li>{ingredient}</li>
                </ol>
            ))}</p> */}
            <img alt="recipe_image" src={image} />
        </div>
        
    )

}


export default Recipe;
