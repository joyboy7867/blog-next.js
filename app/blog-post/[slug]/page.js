"use client"
import React from 'react';
import styles from "./blog-post.module.css"
import { useEffect} from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const page = (params) => {
    
    const [blog, setblog] = useState()
    let data;
    
    useEffect(  () => {
        
        fetch(`http://localhost:3000/api/getblog?slug=${params.params.slug}`,{
            next:{revalidate:10}
        }).then((found)=>{
         data=found.json().then((a)=>{
            
             setblog(a)
             
         })
         
        })
      
            
         
        
        
     },[])



    return <div className={styles.mainblog}> 
        <h1 className={styles.params}>{blog&&blog.title}</h1>
        <hr />
        <h3>{blog && blog.content}</h3>
         </div>;
}




export default page;