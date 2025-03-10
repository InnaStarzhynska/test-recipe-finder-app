
'use client'

import { Notify } from "notiflix";
import React, { ChangeEvent, FormEvent, useState } from "react";
import BtnSubmit from "./components/btnSubmit";
import { useRouter } from "next/navigation";

export default function Search() {
  const [query, setQuery] = useState<string | null>(null);
  const [cuisine, setCuisine] = useState<string | null>(null);
  const [maxReadyTime, setMaxReadyTime] = useState<number | null>(null);
  const router = useRouter();

  const isDisabled = query || cuisine || maxReadyTime ? false : true;

  const handleChange = (evt: ChangeEvent <HTMLInputElement> | ChangeEvent <HTMLSelectElement>)=> {
    switch (evt.target.name) {
      case 'query':
        setQuery(evt.target.value)
        break;

      case 'cuisine':
        if (evt.target.value !== '') {
          setCuisine(evt.target.value);
        } else {
          setCuisine(null);
        }
        break;

      case 'maxReadyTime':
        setMaxReadyTime(Number(evt.target.value))
        break;

      default:
        Notify.failure("Something went wrong, try again!")
    }
  }

  const handleSubmit = async (evt: FormEvent)=> {
    evt.preventDefault();
    const params = new URLSearchParams();
        if (query) {
        params.append("query", query)
        }
        if (cuisine) {
          params.append("cuisine", cuisine)
        }
        if (maxReadyTime) {
          params.append("maxReadyTime", maxReadyTime.toString())
        }

        router.push(`/recipes?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:w-[450] xl:w-[800] ml-auto mr-auto mt-0 mb-0 border rounded p-[15]">
      <input type="text" name="query" placeholder='What are you looking for?' onChange={handleChange} className='border mb-[10] rounded pl-[5]' />
      <select name="cuisine" onChange={handleChange} defaultValue='default' className='border mb-[10] rounded pl=[5]'>
        <option value="">Choose a cuisine</option>
        <option value="asian">Asian</option>
        <option value="italian">Italian</option>
        <option value="mexican">Mexican</option>
        <option value="greek">Greek</option>
      </select>
      <input type='number' name="maxReadyTime" onChange={handleChange} placeholder='Maximum preparation time' className='border mb-[20] rounded pl-[5]'/>
      <BtnSubmit isDisabled={isDisabled}>Next</BtnSubmit>
    </form>
  )
}
