import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import {MdOutlineSegment,MdClose} from 'react-icons/md'


export const Navbar = () => {

   const router = useRouter()
   const ref= useRef<string | any>("")

   const [showMenu,setShowMenu]= useState(false);

   function handleClick(event:any){
      if(event.target.contains(ref.current)){
         setShowMenu(false);
      }
   }

   const navLinks = [
      { title: 'Home', path: '/' },
      { title: 'About', path: '/about' },
      { title: 'Services', path: '/services' },
      { title: 'Contact Us', path: '/contact' },
   ]

  return (
    <div className='w-full shadow-md h-16 lg:h-20 sticky top-0 z-50 bg-white px-4 transition-all duration-300'>
     <div className='max-w-container h-full mx-auto py-1 font-bodyFont flex items-center justify-between'>
        <Link href="/">
            <div className="text-2xl md:text-3xl font-black text-blue-900 tracking-tighter cursor-pointer flex items-center gap-1 hover:scale-105 transition-transform">
               <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-900 text-white rounded-lg flex items-center justify-center text-lg md:text-xl shadow-lg">A</div>
               pp<span className="text-green-600">Me</span>
            </div>
        </Link>
         <div className=' hidden mdl:inline-flex items-center gap-6'>
            <ul className='flex text-[16px] gap-8'>
               {navLinks.map((item) => {
                  const isActive = router.pathname === item.path;
                  return (
                     <li key={item.path}>
                        <Link 
                           href={item.path} 
                           className={`relative flex items-center gap-2 font-medium cursor-pointer transition-colors duration-300 group ${
                              isActive ? 'text-textGreen' : 'text-sky-800 hover:text-textGreen'
                           }`}
                        >
                           {item.title}
                           {/* Active underline */}
                           {isActive && (
                              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-textGreen rounded-md"></span>
                           )}
                           {/* Hover underline */}
                           {!isActive && (
                              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-textGreen rounded-md transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                           )}
                        </Link>
                     </li>
                  );
               })}
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
                              {navLinks.map((item) => {
                                 const isActive = router.pathname === item.path;
                                 return (
                                    <li key={item.path}>
                                       <Link 
                                          href={item.path} 
                                          className={`relative flex items-center gap-2 font-medium cursor-pointer transition-colors duration-300 group ${
                                             isActive ? 'text-textGreen' : 'text-textLight hover:text-textGreen'
                                          }`}
                                       >
                                          {item.title}
                                          {isActive && (
                                             <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-textGreen rounded-md"></span>
                                          )}
                                          {!isActive && (
                                             <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-textGreen rounded-md transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                          )}
                                       </Link>
                                    </li>
                                 );
                              })}
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
