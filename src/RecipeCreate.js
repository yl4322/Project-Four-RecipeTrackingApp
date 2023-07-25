import React, { useState } from "react";

/* This is Thinkful module 26.8 knowledge*/
function RecipeCreate({recipes, setRecipes}) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }
const [formData, setFormData]= useState({...initialFormState})
/*"handleChange", "changehandle" doesnt matter*/
const changeHandle = ({target})=> {
    setFormData({...formData, [target.name]: target.value})
  }

const submitHandle = (event)=> {
    event.preventDefault()
    setRecipes([...recipes, formData])
    setFormData({...initialFormState})
  }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  /* Correction: adding this "required={true}" below prevent this app from submitting empty recipe */
return (
    <form name="create" onSubmit={submitHandle}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"          
                type="text"
                required={true}
                placeholder="Name"
                onChange={changeHandle}
                value={formData.name}
              />    
            </td>
            <td>
              <input
                name="cuisine"    
                type="text"
                required={true}
                placeholder="Cuisine"
                onChange={changeHandle}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                name="photo"         
                type="url"
                placeholder="URL"
                onChange={changeHandle}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                required={true}
                placeholder="Ingredients"  
                onChange={changeHandle}
                value={formData.ingredients}
              >
              </textarea>
            </td>
            <td>
              <textarea
                name="preparation"
                required={true}
                placeholder="Preparation" 
                onChange={changeHandle}  
                value={formData.preparation}
              >
              </textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
