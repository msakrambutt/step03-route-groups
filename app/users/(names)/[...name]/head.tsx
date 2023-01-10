import React from 'react'


export default function head({params}:{params:{name:string[]}}){
    const [name]=params.name
  return (
    
      <>
        <title>{name}</title>
    
    </>
  )
}

 
