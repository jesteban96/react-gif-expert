import { useEffect, useState } from "react";
// import { getGif } from "../helpers/GetGif";
import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {
  
    const {images,isLoading} = useFetchGif(category);
    
    return (
    <>
        <h3>{category}</h3>

        {
            isLoading && (<h2>Cargando...</h2>)
        }
        <div className="card-grid">
            {images.map((img)=>(
                <GifItem 
                    key={img.id}
                    {...img}/>
            ))}
        </div>
    </>
  )
}
