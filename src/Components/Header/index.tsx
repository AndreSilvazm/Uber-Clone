import React from 'react';
import styles from './header.module.css'
import Image from 'next/image';
import UberLogo from '../../../public/Imagens/uberlogo.png'
import Link from 'next/link';

function index() {
    return (
        <div className='bg-black w-full'>
            <header className='w-full h-[80px] bg-black flex justify-between items-center px-3 md:w-8/12 md:m-auto'>
                <section className='flex flex-row gap-5'>
                    <Image src={UberLogo} alt='Uber logo' className='w-[71px] h-[25px]' />

                    <Link className='hidden md:inline text-white' href='/'>Company</Link>
                    <Link className='hidden md:inline text-white' href='/'>Safety</Link>
                    <Link className='hidden md:inline text-white' href='/'>Help</Link>

                </section>

                <section className=''>
                    <Link href='/' className='text-white text-[16px] mx-3 '>Login</Link>
                    <Link href='/' className='text-black  bg-white rounded-lg text-center w-[79px] h-[25px] p-1'>Sign up</Link>

                </section>
            </header>

        </div>
    );
}

export default index;