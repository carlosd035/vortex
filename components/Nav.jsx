'use client'
import Image from 'next/image'
import Link from 'next/link';


export const Nav = () => {
  return (
    <div className="flex itens-center justify-between p-[50px]">
      <Image
        src="/logo.png"
        alt="logo"
        width={150}
        height={100}
      />
      <div className='flex gap-[15px] items-center'>
       <Link href="/profile"> <p className='text-xl font-mono text-white hover:text-neutral-300'>PROFILE</p>
       </Link>
        <p className='text-xl font-mono text-white hover:text-neutral-300'>CONTACTS</p>
      </div>
    </div>
  )
}


