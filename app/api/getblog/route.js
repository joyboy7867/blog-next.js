import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { promises as fs } from 'fs';


export  async function GET(request){
    let reposne;
    const title=request.nextUrl.searchParams.get("slug")
    
    reposne=await fs.readFile(`blogdata/${title}.json`,'utf-8')
    
    return NextResponse.json(JSON.parse(reposne))
}