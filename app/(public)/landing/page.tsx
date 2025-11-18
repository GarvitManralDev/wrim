"use client"

import HeroSectionOne from '@/components/hero-section-demo-1'
import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavbarLogo,
  NavItems,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar'; 
import { BentoGridSecondDemo } from '@/components/bento-grid-demo-2';
import Footer from '@/components/footer';
import SocialProof from '@/components/social-proof';
import FinalCTA from '@/components/final-cta';
import ProductFlow from '@/components/product-flow';

function page() {
    const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <>
        {/* NAVBAR */}
        <Navbar className="">
        {/* DESKTOP NAV */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navLinks} />
          <NavbarButton href="#contact">Get Started</NavbarButton>
        </NavBody>

        {/* MOBILE NAV */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />

            <MobileNavToggle
              isOpen={open}
              onClick={() => setOpen((prev) => !prev)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={open} onClose={() => setOpen(false)}>
            {navLinks.map((nav, i) => (
              <a
                key={i}
                href={nav.link}
                onClick={() => setOpen(false)}
                className="text-lg text-black dark:text-white"
              >
                {nav.name}
              </a>
            ))}

            <NavbarButton href="#contact" className="mt-4 w-full">
              Get Started
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
        
        {/* HERO SECTION */}
        <HeroSectionOne/>
            
        {/* BENTO GRID */}
        <section className="text-center max-w-4xl mx-auto mb-16 px-4">
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                Building Future-Ready Technology That Lasts Forever
            </h2>

            <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300 md:text-lg">
                WRIM (We Are Immortals) crafts intelligent, scalable, 
                and AI-driven solutions that help businesses evolve faster, 
                operate smarter, and stay ahead of the future. Our aim is to 
                create technology that adapts, grows, and stands the test of time — truly immortal.
            </p>
            </section>
        <BentoGridSecondDemo />
        
        {/*Product Flow*/}
        <ProductFlow/>
        
        {/*Testimonials*/}
        <SocialProof/>

        {/*CTA*/}
        <FinalCTA/>

        {/*Footer*/}
        <Footer/>
    </>
  )
}

export default page