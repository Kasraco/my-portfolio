"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Hamburger from "hamburger-react";

const menuLinks = [
  { path: "/", lable: "Home" },
  { path: "/Services", lable: "Services" },
  { path: "/Resume", lable: "Resume" },
  { path: "/Work", lable: "Works" },
  { path: "/Contact", lable: "Contact" },
];
const MyMenu = ({ className, circleClass }) => {
  const container = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const tl = useRef();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { x: -250 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1,
          clipPath: "circle(150% at 0% 0%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          x: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isOpen]);
  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-open" onClick={toggleMenu}>
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            className="relative z-50"
          />
        </div>
        <div className="menu-logo">
          <Link href="#">
            <Image
              src="/assets/IamdevLogo.png"
              priority
              quality={100}
              height="50"
              width="200"
              alt=""
              className="object-contain z-0"
            />
          </Link>
        </div>
      </div>

      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-open" onClick={toggleMenu}>
            <Hamburger toggled={isOpen} toggle={toggleMenu} className="z-50" />
          </div>

          <div className="menu-logo">
            <Link href="#">
              <Image
                src="/assets/IamdevLogo.png"
                priority
                quality={100}
                height="50"
                width="200"
                alt=""
                className="object-contain z-0"
              />
            </Link>
          </div>
        </div>

        <div className="menu-copy">
          <div className="menu-link">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path}>{link.lable}</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info"></div>
        </div>
      </div>
    </div>
  );
};

export default MyMenu;
