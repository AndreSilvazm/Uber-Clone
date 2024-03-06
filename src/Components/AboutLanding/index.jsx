import React from 'react';
import CarsImg from '../../../public/Imagens/post1.png'
import DriverImg from '../../../public/Imagens/post2.png'
import Image from 'next/image';
import { HiUserGroup } from "react-icons/hi2";
import { FaClipboardList } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import Link from 'next/link';


function index() {
    return (
        <div>

            <section className='p-3 w-full md:h-screen md:my-14'>

                <h1 className='text-[18px] font-bold leading-[23.58px] md:w-8/12 md:m-auto md:text-[37px] md:text-'>Preocupados com a sua segurança, onde quer que você vá</h1>

                <section className='md:flex md:flex-row gap-4 md:w-8/12 md:m-auto'>

                    <article className='flex flex-col gap-4 my-7'>
                        <Image src={CarsImg} />
                        <h2 className='font-medium text-[18px] text-black'>Sua segurança é a nossa prioridade</h2>

                        <p>Com todos os recursos de segurança e todas as normas do nosso Código da Comunidade Uber, estamos comprometidos em ajudar a criar um ambiente seguro para nossos usuários.</p>
                    </article>


                    <article className='flex flex-col gap-4 my-7'>

                        <Image src={DriverImg} />

                        <h2 className='font-medium text-[18px] text-black'>Colocamos mais de 10.000 cidades em movimento</h2>

                        <p>Com todos os recursos de segurança e todas as normas do nosso Código da Comunidade Uber, estamos comprometidos em ajudar a criar um ambiente seguro para nossos usuários.</p>
                    </article>

                </section>

                <section className='md:w-8/12 md:m-auto md:flex md:gap-10 md:mt-14'>

                    <article className='h-[200px] flex flex-col justify-around my-8 md:w-[350px] md:h-[200px]'>
                        <i className='text-[36.36px] text-black'><HiUserGroup /></i>

                        <h1 className='text-[20px] font-medium text-black'>Quem somos</h1>

                        <span className='text-[16px] text-[#292524] font-medium'>Find out how we started, what drives us, and how we’re reimagining how the world moves.</span>

                        <a className='text-[14px] font-normal text-[#1C1917] underline'>Saiba mais sobre a Uber</a>

                    </article>

                    <article className='h-[200px] flex flex-col justify-around my-8 md:w-[350px] md:h-[200px]'>
                        <i className='text-[36.36px]  text-black'><FaClipboardList /></i>

                        <h1 className='text-[20px] font-medium text-black'>Newsroom</h1>

                        <span className='text-[16px] text-[#292524] font-medium'>Find out how we started, what drives us, and how we’re reimagining how the world moves.</span>

                        <a className='text-[14px] font-normal text-[#1C1917] underline'>Acesse o Newsroom</a>

                        
                    </article>

                    <article className='h-[200px] flex flex-col justify-around my-8 md:w-[350px] md:h-[200px]'>
                        <i className='text-[36.36px] text-black'><FaHouseChimney /></i>

                        <h1 className='text-[20px] font-medium text-black'>Cidadania global</h1>

                        <span className='text-[16px] text-[#292524] font-medium'>Find out how we started, what drives us, and how we’re reimagining how the world moves.</span>

                        <a className='text-[14px] font-normal text-[#1C1917] underline'>See our partnerships</a>
                        
                    </article>

                </section>




            </section>
        </div>
    );
}

export default index;