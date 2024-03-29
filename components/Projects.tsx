import { BsBoxArrowUpRight, BsCalendarDate, BsStar } from 'react-icons/bs';
import { AiFillTag } from 'react-icons/ai';
import { VscRepoForked } from 'react-icons/vsc';
import React, { useEffect, useState } from 'react';
import { getRepos } from '../libs/getRepos';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getRepos().then(res => setRepos(res.data));
  }, []);

  const toIncludeOpenSource = ['shap'];

  const toIncludeProjects = [
    'Bugtrax',
    'blogfolio',
    'implementing_Han_et_al_2019',
    'Projet_scoring_credit',
    'Projet_aws_pyspark_fruits',
    'Philosophie',
    'Projet_NLP_image_class'
  ];

  const toIncludeExercises = [
    'SignUpForm',
    'admin-dashboard',
    'landing_page',
    'calculator',
    'etch-a-sketch'
  ];

  return (
    <div className="flex flex-col gap-4">
      {/*
      <h3 className="text-2xl font-bold underline underline-offset-2">
        Contributions projets Open Source:
      </h3>
			*/}

      <h3 className="text-2xl font-bold underline underline-offset-2">
        Contributions projets Open Source:
      </h3>

      <section className="articles projets grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos
          .filter(repo => {
            if (toIncludeOpenSource.includes(repo.name)) {
              return repo;
            }
          })
          .map(repo => {
            return (
              <article
                key={repo.id}
                className="article flex flex-col border p-2 bg-slate-300 dark:bg-slate-700 rounded-md items-start justify-center"
              >
                <h2 className="text-2xl font-bold">
                  <a
                    href={repo.svn_url}
                    target="_blank"
                    className="flex flex-wrap gap-2"
                  >
                    {repo.name}
                    <BsBoxArrowUpRight />
                  </a>
                </h2>
                <p className="flex gap-2">{repo.description}</p>
                <ul>
                  <li className="flex gap-2">
                    <BsCalendarDate />{' '}
                    {new Date(repo.created_at).toDateString()}
                  </li>
                  {repo.homepage && (
                    <li className="flex gap-2">
                      <AiFillTag />
                      <a href={repo.homepage} target="_blank">
                        Lien : {repo.homepage}
                      </a>
                    </li>
                  )}
                </ul>
                <section className="flex gap-4">
                  <p className="flex gap-2">
                    <BsStar className="" /> {repo.stargazers_count}
                  </p>
                  <p className="flex gap-2">
                    <VscRepoForked className="" /> {repo.forks_count}
                  </p>
                </section>
              </article>
            );
          })}
      </section>

      <h3 className="text-2xl font-bold underline underline-offset-2">
        Projets Personnels divers:
      </h3>

      <section className="articles projets grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos
          .filter(repo => {
            if (toIncludeProjects.includes(repo.name)) {
              return repo;
            }
          })
          .map(repo => {
            return (
              <article
                key={repo.id}
                className="article flex flex-col border p-2 bg-slate-300 dark:bg-slate-700 rounded-md items-start justify-center"
              >
                <h2 className="text-2xl font-bold">
                  <a
                    href={repo.svn_url}
                    target="_blank"
                    className="flex flex-wrap gap-2"
                  >
                    {repo.name}
                    <BsBoxArrowUpRight />
                  </a>
                </h2>
                <p className="flex gap-2">{repo.description}</p>
                <ul>
                  <li className="flex gap-2">
                    <BsCalendarDate />{' '}
                    {new Date(repo.created_at).toDateString()}
                  </li>
                  {repo.homepage && (
                    <li className="flex gap-2">
                      <AiFillTag />
                      <a href={repo.homepage} target="_blank">
                        Lien : {repo.homepage}
                      </a>
                    </li>
                  )}
                </ul>
                <section className="flex gap-4">
                  <p className="flex gap-2">
                    <BsStar className="" /> {repo.stargazers_count}
                  </p>
                  <p className="flex gap-2">
                    <VscRepoForked className="" /> {repo.forks_count}
                  </p>
                </section>
              </article>
            );
          })}
      </section>

      <h3 className="text-2xl font-bold underline underline-offset-2">
        Se faire la main :
      </h3>
      <section className="articles projets grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos
          .filter(repo => {
            if (toIncludeExercises.includes(repo.name)) {
              return repo;
            }
          })
          .map(repo => {
            return (
              <article
                key={repo.id}
                className="article flex flex-col border p-2 bg-slate-300 dark:bg-slate-700 rounded-md items-start justify-center"
              >
                <h2 className="text-2xl font-bold">
                  <a href={repo.svn_url} target="blank" className="flex gap-2">
                    {repo.name}
                    <BsBoxArrowUpRight />
                  </a>
                </h2>
                <p className="flex gap-2">{repo.description}</p>
                <ul>
                  <li className="flex gap-2">
                    <BsCalendarDate />{' '}
                    {new Date(repo.created_at).toDateString()}
                  </li>
                  {repo.homepage && (
                    <li className="flex gap-2">
                      <AiFillTag />
                      <a href={repo.homepage} target="_blank">
                        Lien : {repo.homepage}
                      </a>
                    </li>
                  )}
                </ul>
                <section className="flex gap-4">
                  <p className="flex gap-2">
                    <BsStar className="" /> {repo.stargazers_count}
                  </p>
                  <p className="flex gap-2">
                    <VscRepoForked className="" /> {repo.forks_count}
                  </p>
                </section>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Projects;
