import Head from 'next/head';
import type { NextPage } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/Experiences';
import { useConfiguration } from '@/store/modules';
import classNames from 'classnames';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';

const Home: NextPage = () => {
  const isNightMode = useConfiguration((state) => state.mode === 'night');
  console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  return (
    <div
      className={classNames(
        'h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0 min-height',
        {
          'bg-day-mode-background text-day-mode-text': !isNightMode,
          'bg-night-mode-background text-night-mode-text': isNightMode,
          'scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-night-mode-yellow/80': isNightMode,
          'scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-day-mode-yellow/80': !isNightMode,
        },
      )}
    >
      <Head>
        <title>Rodrigo&apos;s Portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start min-height">
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
