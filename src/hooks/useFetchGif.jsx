import { useEffect, useState } from "react";
import { getGif } from "../helpers/GetGif";

export const useFetchGif = (category) => {

    const [images, setimages] = useState([]);
    const [Isloading, setIsLoading] = useState(true);

    useEffect(()=>{
        getGif(category)
            .then(setimages);
        setIsLoading(false);
    },[ ]);
    
    return ({
        images,
        Isloading
    });
}
