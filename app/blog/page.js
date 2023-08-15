"use client"

import React, { useState } from 'react';
import { useEffect } from 'react';
import styles from "./blog.module.css"
import Link from 'next/link';
const page = (props) => {
const [blog, setblog] = useState([])
let data;

    
    useEffect(  () => {
       
       fetch("http://localhost:3000/api/blog",{next:{revalidate:10}}).then((found)=>{
        data=found.json().then((a)=>{
            
            setblog(a)
            
        })
        
       })
     
           
        
       
       
    },[])
    return <div className={styles.blog}> 

       {blog.map((ele)=>{
        return(
            <div key={ele.slug} className={styles.content}>
            <Link href={`/blog-post/${ele.slug}`}>
            <h2>{ele.title}</h2>
            <p>{ele.content.substr(0,200)}...</p>
            <hr />
            </Link>
        </div>

        )
       })}
            
        

    </div>;
}





export default page;
