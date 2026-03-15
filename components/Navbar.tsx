import Link from 'next/link'
import { useRef, useState } from 'react'
import {MdOutlineSegment,MdClose} from 'react-icons/md'


export const Navbar = () => {

   const ref= useRef<string | any>("")

   const [showMenu,setShowMenu]= useState(false);

   function handleClick(event:any){
      if(event.target.contains(ref.current)){
         setShowMenu(false);
      }
   }

  return (
    <div className='w-full shadow-md h-16 lg:h-20 sticky top-0 z-50 bg-white px-4 transition-all duration-300'>
     <div className='max-w-container h-full mx-auto py-1 font-bodyFont flex items-center justify-between'>
        <Link href="/">
            <div className="text-3xl font-extrabold text-blue-900 tracking-tighter cursor-pointer flex items-center gap-1 hover:scale-105 transition-transform">
               <div className="w-8 h-8 bg-blue-900 text-white rounded-lg flex items-center justify-center text-xl shadow-lg">A</div>
               pp<span className="text-green-600">Me</span>
            </div>
        </Link>
         <div className=' hidden mdl:inline-flex items-center gap-6'>
            <ul className='flex text-30px gap-8'>
                <Link href="/"  className='flex items-center gap-2 font-medium text-sky-800
                   hover:text-textGreen cursor-pointer duration-300'><li>Home</li></Link>

                <Link href="/about"  className='flex items-center gap-2 font-medium text-sky-800
                   hover:text-textGreen cursor-pointer duration-300'><li>About</li></Link>

                <Link href="/services" className='flex items-center gap-2 font-medium text-sky-800
                   hover:text-textGreen cursor-pointer duration-300'><li>Services</li></Link>
                
                <Link href="/contact"  className='flex items-center gap-2 font-medium text-sky-800
                   hover:text-textGreen cursor-pointer duration-300'><li>Contact Us</li></Link>
                
            </ul>
         </div>
         
         <div className='flex flex-col justify-between items-center mdl:hidden'>
            <MdOutlineSegment size={30} onClick={()=> setShowMenu(true)} className='cursor-pointer hover:text-green-500 '/>
         </div>

         {
            showMenu && (
               <div ref={(node)=>(ref.current=node)}  onClick={handleClick}
                  className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'
                  >
                     <div className='w-[50%] h-full overflow-y-scroll bg-[#112240] flex flex-col items-center px-4 py-10 relative'>
                        <MdClose size={30} onClick={()=>setShowMenu(false)} className='cursor-pointer hover:text-red-500 absolute top-4 right-4'/>
                        <div>
                           <ul className='flex flex-col text-base gap-7'>
                           <Link href="/"  className='flex items-center gap-2 font-medium text-textLight
                              hover:text-textGreen cursor-pointer duration-300' ><li>Home</li></Link>

                           <Link href="/about"  className='flex items-center gap-2 font-medium text-textLight
                              hover:text-textGreen cursor-pointer duration-300' ><li>About</li></Link>

                           <Link href="/services" className='flex items-center gap-2 font-medium text-textLight
                              hover:text-textGreen cursor-pointer duration-300' ><li>Services</li></Link>
                
                           <Link href="/contact"  className='flex items-center gap-2 font-medium text-textLight
                              hover:text-textGreen cursor-pointer duration-300' ><li>Contact Us</li></Link>
                           </ul>
                        </div>
                     </div>
                  </div>
            )
         }

      </div>  
    </div>
  )
}




   //const ref= useRef<string | any>("")

   // const handleScroll =(event: React.MouseEvent<HTMLAnchorElement,MouseEvent>) => {
   //    event.preventDefault()

   //    const href= event.currentTarget.href

   //    const targetId= href.replace(/.*\#/,"")
   //    const elem = document.getElementById(targetId)

   //    elem?.scrollIntoView({
   //       behavior: "smooth"
   //    })

      //update class name of all clicked link.
   //    const links = document.querySelectorAll(".nav-link")

   //    links.forEach((link)=>{
   //       link.classList.remove("active")
   //    })
   //    event.currentTarget.classList.add("active")
   // }
