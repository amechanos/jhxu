// src/pages/Home.tsx
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Media } from './components/MediaPlayer'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Media />
        <Portfolio />
        <About />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}