import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <h3 className='text-2xl font-semibold'> Hello Dear, world from Shahid Akram Butt</h3>
      <br/>
          <Link href="/name">Go to name page</Link>
    </div>     
  )
}