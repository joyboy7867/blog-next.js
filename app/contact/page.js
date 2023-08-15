"use client"
import styles from "./contact.module.css"
import { useState,useEffect } from "react";
import Head from "next/head";

const page = () => {

    const [detail, setdetail] = useState({})

    function handleonchange(e){
        
        setdetail({...detail,[e.target.name]:e.target.value})
      
    }

  async function handlesubmit(e){

        fetch("http://localhost:3000/api/postcontact",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(detail)
        }).then((ele)=>{
            console.log(ele);
        })

        e.preventDefault();
    }

    // useEffect(() => {
    //    console.log("usestate",detail)
    // }, [detail])


    return <>
           
            
    
            <div>

                    <form className={styles.form}>
                       <h2 className={styles.heading}>We Would Love To Hear From You!!</h2>
                        <input className={styles.input} type="text" name="name" placeholder="Name" />
                    
                        <input className={styles.input} type="email" name="email" placeholder="Email" />
                        <input className={styles.input} type="number" name="name" placeholder="Number" />
                    <button className={styles.btn} type="submit" onClick={handlesubmit}>Submit</button>
                    </form>


        {/* <form action="onSubmit" className={styles.form}>
            <input className={styles.inputs} type="text" onChange={handleonchange} name="name" placeholder="name" />
            <input className={styles.inputs} type="email" onChange={handleonchange} name="email" placeholder="Email" />
            <input className={styles.inputs} type="number" onChange={handleonchange} name="contact" placeholder="Contact"/> 
            <button type="submit" onClick={handlesubmit} >Submit</button>
        </form> */}


    </div>
    </>
}



export default page;