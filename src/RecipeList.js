import React from "react";
import RecipeCreate from './RecipeCreate';
import RecipeRow from "./RecipeRow";

// link to app.js line 42 <RecipeList> pass it as propt
function RecipeList({recipes, setRecipes, deleteRecipe}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

/*line 26 - 38 | module 26.7 (5.7now) knowledge .... ???????condusion here???????????????*/
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
          {recipes.map((recipe, index) => (
            <RecipeRow  /* ok, "recipe" on the right from RecipeRow.js */
              recipe={recipe} 
              deleteRecipe={() =>
              deleteRecipe(index)}
              key={index}/>
          ))}
        </tbody>
      </table>
      <RecipeCreate recipes={recipes} 
        setRecipes={setRecipes}/>
    </div>
  );
}
export default RecipeList;
