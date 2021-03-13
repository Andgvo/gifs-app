import { Gif } from "../components/GifGrid/GifGrid";

const api_key = 'K7dqfV3UdDI7a5ZINDU7vomP1RKeD17x';


export const getGifs = async (category:string) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch( url );
    const {data} = await resp.json();
    
    const gifs: Gif[] = data.map( (img:any) => {
       return { 
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
};