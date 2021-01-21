import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Recipe from './recipe.js';

function App() {

  const APP_ID = '3abf84ff'; 
  const APP_KEY = 'ce2b72ab36f50177f8bc5067a5524b40';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    getRecipes();
    console.log('ueseEffect has been run');
  }, []);

  const updateSearch = (e)=>{
    setSearch(e.target.value);
    console.log(search);
  }

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return (
    <div className="home">
      <form>
        <input type="text" value={search} onChange={updateSearch}/>
        <button type="submit">Search</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          // ingredients={recipe.recipe.ingredients} 
          image={recipe.recipe.image}
          />
      ))}  
    </div>
  )

}

export default App;
