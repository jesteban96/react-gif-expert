import { useEffect, useState } from "react";
import { getGif } from "../helpers/GetGif";

export const useFetchGif = (category) => {

    const [images, setimages] = useState([]);
    const [Isloading, setIsLoading] = useState(true);

    useEffect(()=>{
        setIsLoading(false);
        getGif(category).then(setimages);
    },[]);
    
    return ({
        images,
        Isloading
    });
}
