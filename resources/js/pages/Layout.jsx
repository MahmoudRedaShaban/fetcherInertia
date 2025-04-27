import React from 'react'
import {   Link  } from '@inertiajs/react'

export default function Layout({children}) {
  return (
    <>
        <header className='navbar rounded-box flex w-full items-center justify-between gap-2 shadow-base-300/20 shadow-sm'>
            <nav className='menu menu-horizontal p-0 font-medium'>
                <Link className='nav-link' href="/">Home</Link>
                <Link className='nav-link' href="/about">About</Link>
                <Link className='nav-link' href="/users">Users</Link>
                <Link className='nav-link' href="/contact">Contact</Link>
            </nav>
        </header>
        <main>
            <article>{children}</article>
        </main>
    </>
  )
}
