"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import useThemeSwitcher from "./hook/useTHemeSwitcher";

// import icons
import { BiLogoGmail } from "react-icons/bi";
import { GiHummingbird } from "react-icons/gi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BiSolidSun } from "react-icons/bi";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group dark:text-light`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
          
          ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({href, title, className="", toggel}) =>{

  const router = useRouter();

  const handleClick = ()=>{
    toggel();
    router.push(href)
  }

    return(
      <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
        {title}

        <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        
        ${router.asPath === href ? 'w-full' : 'w-0' } dark:bg-dark
        `}>&nbsp;</span>
      </button>
     )
    
}

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-20  py-8 flex items-center justify-between md:px-12 sm:px-8 xs:px-4">



      <div>

        {/* logo  */}
        <Link href="/">
          {" "}
          <h2 className="flex items-center justify-center font-bold text-[1.9rem] md:text-[1.5rem] text-dark/80 dark:text-light/80">
            <GiHummingbird className="text-[45px] md:text-[30px] relative text-primary -top-4 dark:text-primaryDark" />
            TSM<span className="text-primary dark:text-primaryDark">Code</span>
          </h2>
        </Link>
      </div>


    {/* navlist  */}
      <div>
        <ul className="flex items-center justify-center gap-5 lg:hidden">
          <CustomLink title="Home" href="/" />
          <CustomLink title="About" href="/about" />
          <CustomLink title="Projects" href="/projects" />
          {/* <CustomLink title="Blogs" href="/blogs" /> */}

          {/* dark mode btn  */}
          <div className="flex gap-4 items-center justify-center">
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={"ml-4 flex items-center justify-center  p-1"}
            >
              <BsFillMoonStarsFill className="text-2xl cursor-pointer text-dark/80 dark:text-light/80" />
             
            </button>

            {/* Contact btn  */}
            <Link
              type="button"
              className="flex gap-2 items-center font-semibold justify-center dark:text-dark bg-dark/80 text-light text-sm py-2 px-5 rounded-md hover:bg-dark dark:bg-light/80 dark:hover:bg-light transition-all duration-200 ease-out"
              href="mailto:tusharmore2143@gmail.com"
              target="_blank"
            >
              Get in touch
              <BiLogoGmail className="text-[20px] text-yellow-500" />
            </Link>
          </div>
        </ul>
      </div>

      {
      isOpen?
      <div className='min-w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 
     -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 md:py-20 xs:py-10'>
     <nav className='flex flex-col items-center justify-center'>
        <CustomMobileLink href="/" title="Home" className='dark:font-semibold' toggel={handleClick}/>
        <CustomMobileLink href="/about" title="About" className='dark:font-semibold' toggel={handleClick}/>
        <CustomMobileLink href="/projects" title="Projects" className='dark:font-semibold' toggel={handleClick}/>
        {/* <CustomMobileLink href="/blogs" title="Blogs" className='dark:font-semibold' toggel={handleClick}/> */}
      </nav>
    
     
          {/* dark mode btn  */}
          <div className="flex flex-col gap-4 items-center justify-center">
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={"ml-4 flex items-center justify-center  p-1"}
            >
              <BsFillMoonStarsFill className="text-2xl cursor-pointer text-light/80 dark:text-dark/80" />
             
            </button>

            {/* Contact btn  */}
            <Link
              type="button"
              className="flex gap-2 items-center font-semibold justify-center dark:text-light bg-dark/80 text-light text-sm py-2 px-5 rounded-md hover:bg-light dark:bg-dark/80 dark:hover:bg-dark transition-all duration-200 ease-out"
              href="mailto:tusharmore2143@gmail.com"
              target="_blank"
            >
              Get in touch
              <BiLogoGmail className="text-[20px] text-yellow-500" />
            </Link>
          </div>
     </div>

      :null
     }

<button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
      <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${isOpen ? `rotate-45 translate-y-1` : `-translate-y-0.5`}`}></span>
      <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? `opacity-0` : `opacity-100`}`}></span>
      <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${isOpen ?`-rotate-45 -translate-y-1` : `translate-y-0.5`} `}></span>
    </button>
    </header>
  );
};

export default NavBar;
