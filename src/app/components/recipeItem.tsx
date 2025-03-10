'use server'

import Link from 'next/link';
import React from 'react';

interface RecipeItemProps {
  recipe: {
    id: number,
    image: string,
    imageType: string,
    title: string
  }
}

export default async function RecipeItem({recipe}: RecipeItemProps ) {
  return (
    <li className='p-[10] pb-[30] border rounded w-full md:w-[40%] xl:w-[40%]'>
      <Link href={`/recipes:${recipe.id}`}>
        <img src={recipe.image} alt={recipe.title} className='mb-[20]' />
        <h2 className='font-bold text-center text-lg'>{recipe.title}</h2>
      </Link>
    </li>
  )
}
