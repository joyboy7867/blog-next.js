import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { promises as fs } from 'fs';


export async function GET(request){
    let allblogs=[];
    let myfile;
    let response= await fs.readdir("blogdata")
    for (let index = 0; index < response.length; index++) {
        const element = response[index];
        myfile=await fs.readFile("blogdata/"+element,'utf-8')
       allblogs.push(JSON.parse(myfile))
    }
    return NextResponse.json(allblogs)
    
   

    
   
    
    
    
}