import React,{useState, useEffect} from 'react';
import './App.css';
import Home from './components/Home'
import Recipes from './components/Recipes'
import FooterHome from './components/FooterHome'
import axios from 'axios'
function App() {
  const [search, setSearch]= useState('paneer');
  const [recipes,setRecipes]= useState([]);

  const MY_APP_ID='78437eed';
  const MY_APP_KEY='e136022b99d5f0fc79a5d942e61df84e';
// API call here
useEffect(()=> {
  getRecipes();
},[search]);

const getRecipes= async ()=>{
  const result= await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${MY_APP_ID}&app_key=${MY_APP_KEY}`);
  console.log(result);
  setRecipes(result.data.hits);
};

  const changeHandler=(event)=>{
    setSearch(event.target.value);
  };
  const searchHandler=()=>{
   getRecipes();
  };
  return (
    <div className="App">
       
       <Home search={search} changeHandler={changeHandler} searchHandler={searchHandler}/>
       <div className="container">
        <Recipes recipes={recipes}/>
       </div>
      <FooterHome/>
    </div>
  );
}

export default App;
