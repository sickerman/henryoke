import About from '@/components/About';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export default async function HomePage() {
  return (
    <main className='px-7 lg:max-w-4xl items-center mx-auto'>
      <Hero />
      {/* <About /> */}
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
