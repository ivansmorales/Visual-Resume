import './styles.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CardRepositorie from './CardRepositorie/CardRepositorie';

const News = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [lastComitHash, setLastCommitHash] = useState(null);
  const [numOfCommits, setNumOfCommits] = useState<any>(null);

  const getRepositories = async () => {
    const apiUrl =
      'https://api.github.com/users/ivansmorales/repos?sort=created';
    axios(apiUrl).then((response) => {
      console.log(response.data);
      setRepos(response.data);
    });
  };

  const getCommitActivity = async () => {
    // First commit: 391e3a7f6f52eb71b9b7a44202b10be28033a435
    const firstCommitHash = '391e3a7f6f52eb71b9b7a44202b10be28033a435';
    // Last commit
    const lastCommitUrl =
      'https://api.github.com/repos/ivansmorales/mywebsite/git/refs/heads/master';
    axios(lastCommitUrl).then((response) => {
      setLastCommitHash(response.data.object.sha);
    });
    //Comparing URL
    if (lastComitHash) {
      const comparingURL = `https://api.github.com/repos/ivansmorales/mywebsite/compare/${firstCommitHash}...${lastComitHash}`;
      axios(comparingURL).then((response) => {
        setNumOfCommits(response.data.total_commits + 1);
        console.log(response.data.total_commits + 1);
      });
    }
  };

  useEffect(() => {
    getRepositories();
    getCommitActivity();
  }, [setRepos, setLastCommitHash]);

  return (
    <section className="news__section" id="news">
      <div className="container">
        <h1 className="header">
          Github <span>Contributions</span>
        </h1>
        <div className="last_repos">
          <h3>Últimos tres repositorios</h3>
          {repos &&
            repos.slice(0, 3).map((item) => {
              return (
                <CardRepositorie
                  name={item.name}
                  url={item.html_url}
                  created_at={item.created_at}
                  updated_at={item.updated_at}
                />
              );
            })}
        </div>
        <div className="commits">
          <h3>Repositorio mywebsite</h3>
          <CardRepositorie
            name={'My website'}
            url={'https://github.com/ivansmorales/mywebsite'}
            num={numOfCommits != null ? numOfCommits : ''}
          />
        </div>
      </div>
    </section>
  );
};

export default News;
