import React from 'react';
import Logo from '../../../public/Imagens/uberlogo.png'
import Image from 'next/image';
import app1 from '../../../public/Imagens/lojapple.png'
import app2 from '../../../public/Imagens/playstore.png'

function index() {
    return (
        <div>

            <section className='h-[231px] bg-black flex flex-col justify-around items-center'>

                <Image src={Logo} alt='LogoFooter' className='w-[112px] h-[39px]'/>

                <p className='text-white'>@2024 André Simão</p>

                <article className='flex flex-row gap-2 w-[304px]'>
                    <Image src={app1} alt='apple store' className='w-[155px] h-[45px]'/>
                    <Image src={app2} alt='playstore' className='w-[155px] h-[45px]'/>

                </article>

            </section>            
        </div>
    );
}

export default index;