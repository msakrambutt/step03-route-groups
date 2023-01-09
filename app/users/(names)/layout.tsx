import React from 'react'

export default function LayoutProps({children,}: {children: React.ReactNode}) {
  return (
    <div className='bg-red-200'>{children}</div>
  )
}
