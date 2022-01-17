import { useRouter } from 'next/router';

import IProject from '@interfaces';
import { Project, FolderProject } from '@ui/Project';

import s from './project.module.css';

interface IProjectSection {
  list: IProject[];
}

function ProjectSection({ list }: IProjectSection) {
  const { locale } = useRouter();
  const featuredProjects = list.filter((v) => v.feature);
  const projects = list.filter((v) => !v.feature);

  return (
    <div>
      <ul className={s.featured_list}>
        {featuredProjects.map((v, i) => {
          return (
            <Project
              key={i}
              title={v.title}
              description={
                locale === 'en' ? v.en_Description : v.pt_Description
              }
              tags={v.tags}
              invert={i % 2 == 0}
              thumbnail={v.thumbnail}
              githublink={v.github}
              demolink={v.website}
            />
          );
        })}
      </ul>

      <div className={s.project_list}>
        {projects.map((v, i) => {
          return (
            <FolderProject
              key={i}
              title={v.title}
              description={
                locale === 'en' ? v.en_Description : v.pt_Description
              }
              tags={v.tags}
              githublink={v.github}
              demolink={v.website}
            />
          );
        })}

        {/*
        <div className="absolute bottom-0 pb-10 pt-24 w-full flex justify-center items-center bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900">
          <button className="bg-purple-500 dark:bg-purple-700 text-white font-medium py-2 px-8 rounded-full">
            See more
          </button>
        </div>
        */}
      </div>
    </div>
  );
}

export default ProjectSection;
