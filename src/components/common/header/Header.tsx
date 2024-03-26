"use client"

import { useState, useEffect } from 'react';
import { ResumeBtn } from "@/components";
import { Link } from 'react-scroll';
import { useMediaQuery } from "@/hooks/useMediaQuery";
import './header.css'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Menu from '@/assets/svg/shape/Menu';
import { colors } from '@/constants/colors';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const Header = () => {

  gsap.registerPlugin(ScrollToPlugin);


  const mediaQuery = useMediaQuery(1024);
  const [headerChange, setHeaderChange] = useState('shadow-none');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 60) { setHeaderChange('shadow-lg'); }
      else { setHeaderChange('shadow-none'); }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    gsap.to(window, { duration: 0.5, scrollTo: (0) });
  }

  return (
    <header className={`${headerChange} header bg-moon/50 backdrop-blur-lg`}>
      <div className="container max-w-screen-2xl flex justify-between items-center gap-8">

        <button onClick={handleScrollToTop} className={`brand`}>
          {`<ezmichaely />`}
        </button>

        <div className='navbar'>
          <nav className='navbarList'>
            <Link to="home" activeClass="navLinkActive"
              spy={true} smooth={true} offset={-76}
              duration={500} className={`navLink`}>
              HOME
            </Link>

            <Link to="about" activeClass="navLinkActive"
              spy={true} smooth={true} offset={0}
              duration={500} className={`navLink`}>
              ABOUT
            </Link>

            <Link to="projects" activeClass="navLinkActive"
              spy={true} smooth={true} offset={0}
              duration={500} className={`navLink`}>
              PROJECTS
            </Link>

            <Link to="contact" activeClass="navLinkActive"
              spy={true} smooth={true} offset={0}
              duration={500} className={`navLink`}>
              CONTACT
            </Link>
          </nav>

          <div className="navbarDownload">
            <ResumeBtn classnames='resumeDownload' />
          </div>

        </div>

        {!mediaQuery &&
          <Sheet >
            <SheetTrigger asChild>
              <button className='lg:hidden border border-transparent hover:border-sun p-1'>
                <Menu color={colors.sun} size={24} />
              </button>
            </SheetTrigger>

            {/* //ignore ts-error */}
            <SheetContent side="right" className='h-full flex justify-center items-start '>
              <div className='flex flex-col pt-8'>
                <nav className='flex justify-center items-center gap-4 flex-col'>
                  <SheetClose asChild>
                    <Link to="home" activeClass="navLinkMobileActive"
                      spy={true} smooth={true} offset={-76}
                      duration={500} className={`navLinkMobile`}>
                      HOME
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link to="about" activeClass="navLinkMobileActive"
                      spy={true} smooth={true} offset={0}
                      duration={500} className={`navLinkMobile`}>
                      ABOUT
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link to="projects" activeClass="navLinkMobileActive"
                      spy={true} smooth={true} offset={0}
                      duration={500} className={`navLinkMobile`}>
                      PROJECTS
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link to="contact" activeClass="navLinkMobileActive"
                      spy={true} smooth={true} offset={0}
                      duration={500} className={`navLinkMobile`}>
                    CONTACT
                    </Link>
                  </SheetClose>

                  <div className="navbarMobileDownload">
                    <ResumeBtn classnames='resumeDownload' />
                  </div>
                </nav>


              </div>
            </SheetContent>
          </Sheet>
        }
      </div>
    </header>
  )
}

export default Header