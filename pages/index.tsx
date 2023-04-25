import type { NextPage } from 'next';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import ThemeToggle from 'components/ThemeToggle';
import Section from 'components/Section';
import Paragraph from 'components/Paragraph';
import Header from 'components/Header';
import ProjectCard from 'components/ProjectCard';
import SkillPill from 'components/SkillPill';
import Subheader from 'components/Subheader';
import skills from 'json/skills.json';
import projects from 'json/projects.json';
import CustomLink from 'components/CustomLink';

const Home: NextPage = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex justify-center py-8 px-8 sm:py-14 sm:px-12 md:py-20">
      <Head>
        <title>Miikka Ylisiurunen</title>
        <meta name="description" content="Software engineer interested in web development." />
        <meta
          name="theme-color"
          content={resolvedTheme === 'dark' ? 'rgb(12,14,17)' : 'rgb(249,250,251)'}
        />
      </Head>

      <main className="max-w-2xl flex flex-col space-y-8 sm:space-y-12">
        <div className="flex justify-between font-normal text-zinc-600 dark:text-zinc-400">
          <a
            className="hover:bg-gray-200 cursor-pointer px-2 py-1 -mx-2 rounded-md transition-[background-color] dark:hover:bg-[#1b1e22]"
            href="https://github.com/miikkaylisiurunen"
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>

        <Section>
          <div>
            <h1 className="font-black text-4xl text-zinc-800 dark:text-zinc-200 sm:text-5xl">
              Miikka Ylisiurunen
            </h1>
            <h2 className="text-zinc-500 font-normal">Software Engineer</h2>
          </div>
          <Paragraph>
            I am an ambitious software engineer interested in web development. Even though I have
            the most experience with full-stack technologies such as React and Node.js, I am always
            eager to learn and try new things. I enjoy solving real-world problems and coming up
            with unique solutions to them.
          </Paragraph>
        </Section>

        <Section>
          <Header>Education</Header>
          <div className="leading-snug">
            <Subheader>Tampere University of Applied Sciences</Subheader>
            <Paragraph>Bachelor of Engineering, Software Engineering</Paragraph>
            <p className="text-zinc-500 text-base font-normal">2021 - (2025)</p>
          </div>
        </Section>

        <Section>
          <Header>Work experience</Header>
          <div className="space-y-1">
            <div className="leading-snug">
              <Subheader>Tampere University of Applied Sciences</Subheader>
              <p className="text-zinc-500 text-base font-normal">05/2022</p>
            </div>
            <Paragraph>
              During my month-long internship at Tampere University of Applied Sciences, I created a{' '}
              <CustomLink href="https://chat.miikkay.com" external>
                real-time messaging service
              </CustomLink>{' '}
              I had designed. The frontend is written in React and uses Socket.io for handling
              messages. The backend is written in Node.js using Express, PostgreSQL, and Socket.io.
            </Paragraph>
          </div>
        </Section>

        <Section>
          <Header>Skills</Header>
          {skills.map((category) => {
            return (
              <div key={category.header}>
                <Subheader>{category.header}</Subheader>
                <ul className="flex flex-wrap -m-1 mt-0">
                  {category.list.map((item) => (
                    <SkillPill key={item}>{item}</SkillPill>
                  ))}
                </ul>
              </div>
            );
          })}
        </Section>

        <Section>
          <Header>Projects</Header>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project) => {
              return <ProjectCard key={project.name} details={project} />;
            })}
          </div>
        </Section>
      </main>
    </div>
  );
};

export default Home;
