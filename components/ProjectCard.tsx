import { useRef } from 'react';
import Subheader from './Subheader';
import { GithubIcon, LinkIcon } from './Icons';
import { useTheme } from 'next-themes';

type Props = {
  details: {
    name: string;
    description: string;
    tech: string[];
    link: string;
  };
};

const ProjectCard = ({ details }: Props) => {
  const { resolvedTheme } = useTheme();
  const cardRef = useRef<HTMLAnchorElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // add glow effect to card
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    // calculate the position of the mouse relative to the card
    const rect = card.getBoundingClientRect();
    const leftX = e.clientX - rect.x;
    const topY = e.clientY - rect.y;
    const percentageX = (leftX / rect.width) * 100;
    const percentageY = (topY / rect.height) * 100;

    // apply a radial gradient to the glow element to create a glow effect
    const color = resolvedTheme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.06)';
    glow.style.backgroundImage = `
      radial-gradient(
        circle at
        ${percentageX}%
        ${percentageY}%,
        ${color},
        #00000000
      )
    `;
  };

  return (
    <a
      className="relative p-6 space-y-6 rounded-lg flex flex-1 flex-col justify-between cursor-pointer overflow-hidden bg-white dark:bg-neutral-950 border border-gray-300 dark:border-neutral-800 ease-out duration-150 group"
      href={details.link}
      target="_blank"
      rel="noreferrer"
      ref={cardRef}
      onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col space-y-6 text-zinc-600 dark:text-zinc-400">
        <div>
          <div className="flex justify-between space-x-2 items-center">
            <Subheader ellipsis>{details.name}</Subheader>
            <div className="shrink-0">
              {details.link.includes('github.com') ? <GithubIcon /> : <LinkIcon />}
            </div>
          </div>
          <p className="leading-normal text-sm mt-1">{details.description}</p>
        </div>
      </div>
      <div className="text-xs text-zinc-600 dark:text-zinc-400 font-mono -m-1">
        {details.tech.map((tech) => (
          <span
            key={tech}
            className="bg-gray-100 dark:bg-neutral-800 rounded px-1.5 py-0.5 inline-block m-1"
          >
            {tech}
          </span>
        ))}
      </div>
      <div
        className="absolute w-full h-full left-0 top-0 !m-0 duration-150 transition-opacity ease-out pointer-events-none opacity-0 motion-safe:group-hover:opacity-100"
        ref={glowRef}
      ></div>
    </a>
  );
};

export default ProjectCard;
