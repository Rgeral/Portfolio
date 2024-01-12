import React, { useState, useEffect } from 'react';

const GitHubUserInfo = ({ username }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchGitHubUser = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchGitHubUser();
  }, [username]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Followers: {userData.followers}</p>
      <p>Repositories: {userData.public_repos}</p>
      {/* Add more information as needed */}
    </div>
  );
};

export default GitHubUserInfo;
