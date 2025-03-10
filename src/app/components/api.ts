import axios from "axios"
import { Notify } from "notiflix";

axios.defaults.baseURL = 'https://api.spoonacular.com/recipes/'

// interface RecipesProps {
//     query: string | null,
//     cuisine: string | null,
//     maxReadyTime: number | null
// }

export default interface Recipe{
    id: number,
    image: string,
    imageType: string,
    title: string
}

export async function  getRecipes (searchParams: any) {
    
    try {
        const {query, cuisine, maxReadyTime} = await searchParams;
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
        if(process.env.NEXT_PUBLIC_API_KEY){
            params.append('apiKey', process.env.NEXT_PUBLIC_API_KEY);
        }
        const {data} = await axios.get(`complexSearch?${params.toString()}`);
        return data.results
    }
    catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message)
    }
}
}

export async function getInfoById(id: number) {
    try {
        const {data} = await axios.get(`${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);
        return data

    }
    catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message)
    }
}
}