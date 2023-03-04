import React from 'react'
import MealItem from './MealItem'
import RecipeIndex from './RecipeIndex'
import { useState,useEffect } from 'react'

const Meal = () => {
  const [test,setTest]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
  const [item,setItem]=useState();
  const [show,setShow]=useState(false);
  const [search,setSearch]=useState('')
  useEffect(()=>{
    console.log(test)
    fetch(test).then(res=>res.json()).then(data=>{
      setItem(data.meals);
      setShow(true)
    })
  },[test])
  const setIndex=(alpha)=>{
    setTest(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
  }
  const searchRecipe=(evt)=>{
    if(evt.key==='Enter'){
      setTest(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
  }
  return (
    <div>
        <div className='main'>
            <div className='heading'>
                <h1>Search Your Food Rcipe</h1>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>

            </div>
            <div className='searchBox'>
                <input type="search" className='search-bar' onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe} />
            </div>
            <div className='container'>
              {
                show ? <MealItem data={item}/> :'Not Found'
              }
            </div>
            <div className='indexContainer'>
                <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>
        </div>
    </div>
  )
}

export default Meal