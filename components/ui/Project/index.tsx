import s from './project.module.css';
import LinkIcon from '../../icons/Link';
import GithubIcon from '../../icons/Github';

interface IProject {
  title: string;
  description: string;
  tags: string[];
  githublink: string | null;
  demolink: string | null;
  thumbnail?: string;
  invert?: boolean;
}
export function Project({
  title,
  description,
  tags,
  thumbnail,
  githublink,
  demolink,
  invert,
}: IProject) {
  const firstPart = 'col-start-1 col-end-8';
  const secondPart = 'col-start-6 col-end-13';

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-12 sm:grid-rows-1">
      <div
        className={`${
          invert ? secondPart : firstPart
        } row-span-full rounded-xl bg-purple-700 dark:bg-purple-500 overflow-hidden`}
      >
        <img className={s.image} src={thumbnail} />
      </div>
      <div
        className={`${invert ? firstPart : secondPart} ${
          s.project
        } row-span-full space-y-4 p-8 -mt-4 sm:my-8 rounded-xl z-10`}
      >
        <h4>{title}</h4>
        <p>{description}</p>
        <div
          className={`${s.project_footer} sm:flex-row space-y-4 sm:space-x-4`}
        >
          <ul className={s.tags}>
            {tags.map((v, i) => {
              return <li key={i}>{v}</li>;
            })}
          </ul>

          <ul className={s.links}>
            {githublink && (
              <a className={s.link} href={githublink}>
                <GithubIcon />
              </a>
            )}
            {demolink && (
              <a className={s.link} href={demolink}>
                <LinkIcon />
              </a>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function FolderProject({
  title,
  description,
  tags,
  githublink,
  demolink,
}: IProject) {
  return (
    <div className={`p-6 ${s.project} rounded-xl space-y-2`}>
      <h6>{title}</h6>
      <p>{description}</p>
      <div className={`${s.project_footer} space-y-2`}>
        <ul className={s.tags}>
          {tags.map((v, i) => {
            return <li key={i}>{v}</li>;
          })}
        </ul>

        <ul className={s.links}>
          {githublink && (
            <a className={s.link} href={githublink}>
              <GithubIcon />
            </a>
          )}
          {demolink && (
            <a className={s.link} href={demolink}>
              <LinkIcon />
            </a>
          )}
        </ul>
      </div>
    </div>
  );
}
