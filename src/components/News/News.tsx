import './styles.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

const News = () => {
  const [repos, setRepos] = useState(null);
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
    // Last commit
    const firstCommitHash = '391e3a7f6f52eb71b9b7a44202b10be28033a435';
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
        <h1>
          Github <span>Contributions</span>
        </h1>
        <div className="last-repos">
          <h2>Últimos tres repositorios</h2>
        </div>
      </div>
    </section>
  );
};

export default News;
