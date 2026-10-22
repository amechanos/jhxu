import { useState } from "react";
import "../styles/header.css";
import logo from '../assets/logo.svg'; 

export default function Header() {
  const [rotation, setRotation] = useState(0);

  return (
    <header className="site-header">
      <div className="container header-inner">
          <a href="\">
            <div className="brand">
              
                <img
                  className="logo"
                  src={logo}
                  alt="site logo"
                  width={55}
                  onMouseEnter={() => setRotation(r => r + 180)}
                  onMouseLeave={() => setRotation(r => r + 180)}
                  style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 800ms cubic-bezier(.6,.2,.5,1)' }}
                />
                <h2> jhxu </h2>
              
            </div>
          </a>
      </div>
    </header>
  );
}