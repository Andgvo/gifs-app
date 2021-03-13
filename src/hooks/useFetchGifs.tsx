import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export interface Loading {
    data: any[];
    loading: boolean;
}
export const useFetchGifs = (category: string) => {
    const [state, setState] = useState<Loading>({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs(category).then( imgs => {
            setTimeout( () => {
                setState({
                    data: imgs,
                    loading: false
                })
            }, 2000 )
        })
    }, [] );
    
    return state; // {data:[], loading: true}
}

//NO ES IGUAL A UN FUNCTIONAL COMPONENT