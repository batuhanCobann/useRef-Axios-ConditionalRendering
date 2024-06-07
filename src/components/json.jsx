

import { useEffect , useState, useRef } from "react";
import { jsonPlaceHolderAPI } from "../api/axios";
import { FormControl, TextField } from "@mui/material";


export default function JsonApi(){

    const [data, setData] = useState([]);
    const [getPosts, setGetPosts] = useState(10);
    const inputRef = useRef();
    const styleRef = useRef(null);



        useEffect(() => {
    

            jsonPlaceHolderAPI
            .get(`?limit=${getPosts}`)
            .then((result) => setData(result))

        },[getPosts])







    
        return(
            <>
            <FormControl>
                <TextField 
                inputRef={inputRef} 
                id="outlined-basic" 
                label="Outlined" 
                variant="outlined"
                onChange={(e) => setGetPosts(e.target.value)}
                
                />
            </FormControl>
            
            {data.map(post => 
                <div key={post.id}>
                    <h4 ref={styleRef}>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            )}
            
            </>


        )

    
}