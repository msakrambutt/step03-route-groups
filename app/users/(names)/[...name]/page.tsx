
import React from 'react';
import Link from 'next/link';

export default function page({params}:{params:{name:string}}){
  return (
    <div>Other Names: {params.name}
    <br/>
          <Link href="/">Home Page</Link>
    </div>
  )
}
 
