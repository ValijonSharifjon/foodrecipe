import React from 'react'
import Meal from './Components/Meal'
import './Components/style.css'
import RecipeInfo from './Components/RecipeInfo'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Meal/>}/>
        <Route path="/:MealId" element={<RecipeInfo/>}/>
      </Routes>
    </div>
  )
}

export default App