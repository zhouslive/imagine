import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <aside className='sidebar'>
      <div className="flex size-full flex-col gap-4">
        <Link href='/' className='sidebar-logo'>
        <Image
        </Link>
      
      </div>
    </aside>
  )
}
