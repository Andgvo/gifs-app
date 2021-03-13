import React from 'react'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import './GifGrid.css'

export interface Gif {
    id: string;
    title: string;
    url: string;
}

export const GifGrid = ({category}:any) => {

    // CustomHook
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>  
            <div className="row py-4">
                <div className="col-12">
                    <h3>{category}</h3>
                    <hr />
                </div>
                <div className="col-12">
                    { loading && <p>Loading</p> }

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-5">
                        { images .map( ( img ) => <GifGridItem key={img.id} {...img} />) }
                    </div>

                </div>
            </div>

        </>
    )
}
