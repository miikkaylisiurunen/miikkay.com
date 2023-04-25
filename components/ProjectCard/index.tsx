import Image from 'next/image';
import React from 'react';
import Subheader from 'components/Subheader';

type Props = {
  details: {
    name: string;
    imagePath?: string;
    quality?: number;
    description: string;
    tech: string[];
    link: string;
  };
};

const ProjectCard = ({ details }: Props) => {
  return (
    <a
      className="p-4 bg-white flex-1 rounded-lg flex flex-col justify-between group transition-transform cursor-pointer shadow-[0_8px_16px_rgb(209_213_219/0.5)] hover:scale-[1.03] sm:hover:scale-105 dark:bg-[#121418] dark:shadow-[0_8px_16px_rgb(0_0_0/0.2)]"
      href={details.link}
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <div className="w-full h-40 bg-zinc-100 shadow-inner overflow-hidden relative rounded-lg mb-4 [-webkit-transform:translate3d(0,0,0)] dark:bg-zinc-950">
          {details.imagePath && (
            <Image
              fill
              src={details.imagePath}
              alt={`${details.name} landing page`}
              quality={details.quality || 50}
              sizes="(max-width: 640px) 90vw,
                  (max-width: 768px) 50vw,
                  (max-width: 1536px) 33vw,
                  15vw"
              className="object-cover object-top transition-transform group-hover:scale-105 sm:group-hover:scale-110"
            />
          )}
          <div className="absolute w-full pointer-events-none h-full rounded-lg z-50 shadow-[inset_0_0_16px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_16px_rgba(0,0,0,0.3)]"></div>
        </div>
        <div className="leading-snug">
          <Subheader ellipsis>{details.name}</Subheader>
          <p className="text-zinc-600 leading-snug text-sm dark:text-zinc-400">
            {details.description}
          </p>
        </div>
      </div>
      <span className="text-xs text-zinc-500 mt-4 leading-snug">{details.tech.join(' • ')}</span>
    </a>
  );
};

export default ProjectCard;
