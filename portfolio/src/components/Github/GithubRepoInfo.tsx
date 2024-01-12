import { useEffect, useState } from "react";

const GitHubUserInfo = ({ username, repo }) => {
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${username}/${repo}`);
        if (response.ok) {
          const data = await response.json();
          setRepoData(data);
        } else {
          console.error(`GitHub API request failed with status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching GitHub API:", error);
      }
    };

    fetchRepoData();
  }, []);

  return (
    <div>
      {repoData ? (
        <div>
          <h2>{repoData.name}</h2>
          <p>Description: {repoData.description}</p>
          <p>Stars: {repoData.stargazers_count}</p>
          {/* Ajoutez d'autres informations du repo selon vos besoins */}
        </div>
      ) : (
        <p>Chargement des données du repo...</p>
      )}
    </div>
  );
};

export default GitHubUserInfo;
