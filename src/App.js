import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  /* Relate to RecipeData.js file */
  const [recipes, setRecipes] = useState(RecipeData); //  imported as in line 5

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  

  // lin 16 - 18 is not neccessary?????????????????????
  const deleteRecipe = (indexToDelete) => {
    setRecipes((currentRecipes) => currentRecipes.filter((e, index) => index !== indexToDelete))
  }
//  [1,2,3,4] index

 /* thinkful slide 'delete' example 
 
 const deleteSubscriber = (indexToDelete) =>
    setSubscribers((currentSubscribers) =>
      currentSubscribers.filter((post, index) => index !== indexToDelete)
    );
    
 return (
    <>
      <SubscriberForm createSubscriber={createSubscriber} />
      <SubscriberList
        subscribers={subscribers}
        deleteSubscriber={deleteSubscriber}
      />
    </>
  );
 */ 
return (
    <div className="App">
      <header><h1 style={{ fontFamily: 'cursive',}}>Delicious Food Recipes</h1></header> 
      <RecipeList 
// recipes, setRecipes on the left side of the == can be anything you want to name, related to RecipeList.js
        recipes={recipes} // line 9 ( prop to share info)
        setRecipes={setRecipes} 
        deleteRecipe={deleteRecipe} 
        />
     </div>
  );
}

export default App;
