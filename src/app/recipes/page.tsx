"use server"

import { unstable_cache } from 'next/cache'
import Recipe, { getRecipes } from '../components/api'
import RecipeItem from '../components/recipeItem'


interface SearchParams{
    searchParams: {
        search: string
    }
  };
  
export default async function Recipes({searchParams}: SearchParams) {
    const recipes = await getRecipes(searchParams);
   
  return (
    <ul className='flex flex-wrap gap-[20] ml-auto mr-auto justify-center'>{recipes?.map((item: Recipe) => 
        <RecipeItem key={item.id} recipe={item}/>
    )}
    </ul>
  )
}
