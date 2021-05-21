import './styles.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CardRepositorie from './CardRepositorie/CardRepositorie';

const News = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [lastComitHash, setLastCommitHash] = useState(null);

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
    console.log(lastComitHash);
    //Comparing URL
    if (lastComitHash) {
      const comparingURL = `https://api.github.com/repos/ivansmorales/mywebsite/compare/${firstCommitHash}...${lastComitHash}`;
      axios(comparingURL).then((response) => {
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
        <div className="last-repos">
          <h2>Últimos tres repositorios</h2>
          {repos &&
            repos.slice(0, 3).map((item) => {
              return (
                <CardRepositorie
                  name={item.name}
                  url={item.url}
                  created_at={item.created_at}
                  updated_at={item.updated_at}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default News;
