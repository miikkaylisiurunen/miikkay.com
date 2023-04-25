import { useRef } from 'react';
import Subheader from 'components/Subheader';
import { GithubIcon, LinkIcon } from 'components/icons';

type Props = {
  details: {
    name: string;
    description: string;
    tech: string[];
    link: string;
  };
};

const ProjectCard = ({ details }: Props) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // add glow effect to card
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // get the card and glow elements and return if they don't exist
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    // get the bounding rectangle of the card element
    // and calculate the position of the mouse relative to the card
    const rect = card.getBoundingClientRect();
    const leftX = e.clientX - rect.x;
    const topY = e.clientY - rect.y;
    const percentageX = (leftX / rect.width) * 100;
    const percentageY = (topY / rect.height) * 100;

    // apply a radial gradient to the glow element to create a glow effect
    glow.style.backgroundImage = `
      radial-gradient(
        circle at
        ${percentageX}%
        ${percentageY}%,
        #3b82f615,
        #00000000
      )
    `;
  };

  return (
    <a
      className="relative p-6 space-y-6 rounded-lg flex flex-1 flex-col justify-between cursor-pointer overflow-hidden bg-white dark:bg-[#121418] border border-gray-300 dark:border-gray-50/10 transition-[border] ease-out duration-150 group hover:border-zinc-600 dark:hover:border-blue-200/50"
      href={details.link}
      target="_blank"
      rel="noreferrer"
      ref={cardRef}
      onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col space-y-6">
        {details.link.includes('github.com') ? (
          <GithubIcon className="text-blue-500" />
        ) : (
          <LinkIcon className="text-blue-500" />
        )}
        <div>
          <Subheader ellipsis>{details.name}</Subheader>
          <p className="text-zinc-600 leading-snug text-sm dark:text-zinc-400 mt-1">
            {details.description}
          </p>
        </div>
      </div>
      <span className="text-xs text-zinc-500 leading-snug">{details.tech.join(' • ')}</span>
      <div
        className="absolute w-full h-full left-0 top-0 !m-0 duration-150 transition-opacity ease-out pointer-events-none opacity-0 motion-safe:group-hover:opacity-100"
        ref={glowRef}
      ></div>
    </a>
  );
};

export default ProjectCard;
