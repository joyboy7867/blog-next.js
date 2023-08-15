import { NextRequest, NextResponse } from "next/server"

export  async function GET(request){
   
    
    return NextResponse.json({name:"amaan"})
}

export  async function POST(req,res){
   
   const{name,email,contact}=await req.json();
   console.log(name,email,contact);
    return NextResponse.json({name:"amaan"})
}