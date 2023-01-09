
import React from 'react';
import {FC} from 'react';
interface pageProps{
  params:{name: string}
}

const page:FC<pageProps> =({params})=> {
  return (
    <div>Other Names: {params.name}</div>
  )
}
export default page
