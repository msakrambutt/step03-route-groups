import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <h3 className='text-2xl font-semibold'> Hello World from Shahid Butt</h3>
      <br/>
          <Link href="/name">Go to name page</Link>
    </div>     
  )
}