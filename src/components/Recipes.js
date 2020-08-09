import React from 'react';
import RecipeItem from './RecipeItem'
const Recipes = (props) => {
    const {recipes}=props;



    return (
        <div className="card-columns">
        {
            recipes.map(item=>(
           <RecipeItem 
           name={item.recipe.label}
           image={item.recipe.image}
           ingredientLines={item.recipe.ingredientLines} />
          
            ))
             
                
            
        }
           
             
        </div>
    );
}

export default Recipes;
