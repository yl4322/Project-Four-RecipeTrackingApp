import React from "react";
import RecipeCreate from './RecipeCreate';
import RecipeRow from "./RecipeRow";

// link to app.js line 42 <RecipeList> pass it as prop
function RecipeList({recipes, setRecipes, deleteRecipe}) { //match on the variables on the left in App js. line 43
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

/* line 26 - 38 | module 26.7 (5.7now) knowledge */
 return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {recipes.map((recipe, index) => ( /* same as a "for loop"---> "recipes" line 9 from App.js*/
            <RecipeRow  /* ok, "recipe" on the right from RecipeRow.js */
              recipe={recipe} //line 27
              deleteRecipe={() =>
              deleteRecipe(index)}
              key={index}/>
          ))}
        </tbody>
      </table>
      <RecipeCreate recipes={recipes} /* same logic as line 28 comment */
        setRecipes={setRecipes}/>
    </div>
  );
}
export default RecipeList;
