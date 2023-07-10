import Header from "@/components/Header";
import FoodRecipesLogic from "@/components/FoodRecipesLogic";
import recipes from '@/recipesData.json';
import { useState } from "react";

const FoodRecipes = () => {
  const [ selectedItem, setSelectedItem ] = useState(recipes);

  const filterByPublisher = publisher => {
    if(publisher==="all"){
      setSelectedItem(recipes);
    } else{
      setSelectedItem(
        recipes.filter(recipe => recipe.publisher === publisher)
      )
    }
  }

  const publishers = Array.from(
    new Set(recipes.map(recipe => recipe.publisher))
  )

  return (
    <>
      <Header />
      <select 
        className="dropdown"
        onChange={e => filterByPublisher(e.target.value)}>
        <option value="all" default selected>
          All Publishers
        </option>

        {publishers.map(publisher => {
          return <option key={publisher}>{publisher}</option>
        })}
      </select>

      <div className="recipe_wrap">
        {selectedItem.map((element, index) => {
          return (
            <FoodRecipesLogic 
              key = {index}
              title = {element.title}
              publisher = {element.publisher}
              image_url = {element.image_url}
              source_url = {element.source_url}
            />
          );
        }
        )}
      </div>
    </>
  )
}

export default FoodRecipes
