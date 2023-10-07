export const searchByUserAndRepository = async (searchWord: string) => {
  // Preparar ambas promesas
  const usersPromise = fetch(
    `https://api.github.com/search/users?q=${searchWord}`
  ).then((r) => r.json());
  const repositoriesPromise = fetch(
    `https://api.github.com/search/repositories?q=${searchWord}`
  ).then((r) => r.json());

  // https://api.github.com/repos/{owner}/{repo}

  // Ejecutar promesas simultáneamente
  const [users, repositories] = await Promise.all([
    usersPromise,
    repositoriesPromise,
  ]);

  return { users: users?.items, repositories: repositories?.items };
};

export const getUserInformation = async (userName?: string) => {
  const data = await fetch(`https://api.github.com/users/${userName}`).then(
    (res) => res.json()
  );

  return data;
};

export const getRepositoryInformation = async (repoUrl: string | null) => {
  const data = await fetch(String(repoUrl)).then((res) => res.json());
  return data;
};
