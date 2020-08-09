import React from 'react'

const RecipeItem = (props) => {
  const {name,image, ingredientLines}=props;

    return (
        <div>
        
        <div className="card text-center py-2 mb-3"> 
        <img src={image} alt='Recipes Images...' className="img-fluid w-50 mx-auto rounded-circle"/>
        <div className="card-body">
          <h5>{name}</h5>
        </div>
        <ul className='list-group list-group-flush'>
           {
             ingredientLines.map(ingredient=>
                 <li className='list-group-item' key={ingredient}>{ingredient}</li>
               )
           }    
        </ul>
       
   </div>    





        </div>
    );
}

export default RecipeItem;
