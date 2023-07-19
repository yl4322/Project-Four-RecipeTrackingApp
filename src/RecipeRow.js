import React from 'react';


function RecipeRow({recipe, deleteRecipe}) {
  console.log(recipe)
    return (
      /* how to links the "name" "cuisine"...etc from data sheet to this??????????????????????*/
        <tr> 
            <td>{recipe.name}</td> 
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo} /></td>
            <td className="content_td"><p>{(recipe.ingredients)}</p></td>
            <td className="content_td"><p>{(recipe.preparation)}</p></td>
            <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
        </tr>
    )
}

export default RecipeRow;