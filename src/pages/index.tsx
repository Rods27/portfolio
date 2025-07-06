import Head from 'next/head';
import type { NextPage } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/Experiences';
import { useConfiguration } from '@/store/modules';
import classNames from 'classnames';
import Skills from '@/components/Skills';

const Home: NextPage = () => {
  const mode = useConfiguration((state) => state.mode);
  console.log(mode);
  return (
    <div
      className={classNames(
        'h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden',
        {
          'bg-day-mode-background text-day-mode-text': mode === 'day',
          'bg-night-mode-background text-night-mode-text': mode === 'night',
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

      <section id="about" className="snap-start">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-start">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* Projects */}

      {/* Contact */}
    </div>
  );
};

export default Home;
