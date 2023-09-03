import React from 'react'
import Layout from './components/Layout.jsx'

// importing image
import design1 from '../../public/images/projects/agency-website-cover-image.jpg'
import design2 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import design3 from '../../public/images/projects/devdreaming.jpg'
import design4 from '../../public/images/projects/fashion-studio-website.jpg'
import design5 from '../../public/images/projects/nft-collection-website-cover-image.jpg'
import design6 from '../../public/images/projects/portfolio-cover-image.jpg'
import Image from 'next/image'
import Link from 'next/link'


const Cards = ({img, name, desc, discount}) =>{

  return(
    <div className="col-span-6 lg:col-span-12  w-full sm:w-[80%] xs:w-[80%]  sm:mx-auto h-auto border border-solid border-dark dark:border-light rounded-md border-r-4 border-b-4 p-5  xs:p-3">
    <Image src={img} className="w-full h-auto" />
    {/* <p className="text-sm text-green-700 font-normal py-2">{discount} off</p> */}
    <h2 className="text-2xl xl:text-xl xs:text-lg font-semibold text-primary dark:text-primaryDark py-3">{name}</h2>
    <p className="text-[16px] xl:text-[14px] xs:text-[12px] text-dark/70 dark:text-light/70 font-semibold pb-5">{desc}</p>
    <div className='flex justify-between'>
      {/* <button className="text-sm px-6 py-2 text-light dark:text-dark bg-dark/80 dark:bg-light/80 hover:bg-dark dark:hover:bg-light transition-all ease-out duration-300 rounded-sm cursor-pointer">Buy</button> */}
      <Link href='/' className="text-dark dark:text-light hover:underline text-lg xs:text-sm font-bold pr-5">Visit</Link>
    </div>
  </div>
  )
}

const page = () => {
  return (
    <>
      <Layout className='flex flex-col align-center justify-center py-10  sm:px-12 xs:px-0'>
        {/* <Heading name={'projects'} /> */}

        <div className="grid grid-cols-12 place-items-center gap-10 sm:gap-x-0 ">
         
         <Cards name={'Portfolio'} discount={'20%'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magnam dolores aperiam repudiandae voluptas sit earum voluptates illum a repellat in architecto esse sint error maiores corporis, quidem nemo laudantium.'} img={design1}/>

         <Cards name={'E-commerce'} discount={'10%'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magnam dolores aperiam repudiandae voluptas sit earum voluptates illum a repellat in architecto esse sint error maiores corporis, quidem nemo laudantium.'} img={design2}/>

         <Cards name={'Devloper'} discount={'24%'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magnam dolores aperiam repudiandae voluptas sit earum voluptates illum a repellat in architecto esse sint error maiores corporis, quidem nemo laudantium.'} img={design3}/>

         <Cards name={'Social media'} discount={'30%'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magnam dolores aperiam repudiandae voluptas sit earum voluptates illum a repellat in architecto esse sint error maiores corporis, quidem nemo laudantium.'} img={design4}/>

         

        </div>
      </Layout>
    </>
  )
}

export default page
