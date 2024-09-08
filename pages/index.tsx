import type { NextPage } from 'next';
import Section from '@/components/Section';
import Paragraph from '@/components/Paragraph';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import SkillPill from '@/components/SkillPill';
import Subheader from '@/components/Subheader';
import skills from '@/json/skills.json';
import projects from '@/json/projects.json';
import InlineLink from '@/components/InlineLink';
import MetaTags from '@/components/MetaTags';
import InlineCode from '@/components/InlineCode';
import NavBar from '@/components/NavBar';

const Home: NextPage = () => {
  return (
    <div className="flex justify-center py-8 px-8 sm:py-14 sm:px-12 md:py-20 relative">
      <MetaTags />

      <main className="max-w-3xl flex flex-col space-y-14 sm:space-y-20">
        <NavBar />

        <Section>
          <div>
            <h1 className="font-bold text-xl tracking-wide text-zinc-800 dark:text-zinc-200">
              Miikka Ylisiurunen
            </h1>
            <Paragraph>Software Engineer</Paragraph>
          </div>
          <Paragraph>
            I am an ambitious software engineer interested in web development. Even though I have
            the most experience with full-stack technologies such as <InlineCode>React</InlineCode>{' '}
            and <InlineCode>Node.js</InlineCode>, I am always eager to learn and try new things. I
            enjoy solving real-world problems and coming up with unique solutions to them.
          </Paragraph>
        </Section>

        <Section id="work">
          <Header>Work experience</Header>
          <div className="space-y-3">
            <div className="space-y-0.5">
              <Subheader>Sofia Digital</Subheader>
              <Paragraph>Software Engineer</Paragraph>
              <Paragraph dim>05/2023 - present</Paragraph>
            </div>
            <Paragraph>
              At{' '}
              <InlineLink href="https://sofiadigital.com" external>
                Sofia Digital
              </InlineLink>
              , I get to build software for various platforms, including TVs, browsers, and mobile
              devices. My work mainly includes frontend development using well-known web
              technologies to create engaging user experiences that perform well across all target
              devices and platforms.
            </Paragraph>
          </div>
        </Section>

        <Section id="education">
          <Header>Education</Header>
          <div className="space-y-0.5">
            <Subheader>Tampere University of Applied Sciences</Subheader>
            <Paragraph>Bachelor of Engineering, Software Engineering</Paragraph>
            <Paragraph dim>2021 - (2025)</Paragraph>
          </div>
        </Section>

        <Section id="skills">
          <Header>Skills</Header>
          <Paragraph>
            This is not a comprehensive list of all the technologies I have used, but rather a
            selection of the ones I have the most experience with.
          </Paragraph>
          {skills.map((category) => {
            return (
              <div key={category.header} className="space-y-1.5">
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

        <Section id="projects">
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
