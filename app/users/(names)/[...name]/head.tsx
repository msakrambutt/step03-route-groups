import React from 'react'

export default function head({params}) {
    const [name]=params.name
  return (
    <div>
        <title>{name}</title>
    </div>
  )
}
