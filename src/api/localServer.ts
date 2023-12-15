import { RepositoryProps } from "../types/repository";
import { Searches } from "../types/search";
import { UserProps } from "../types/user";

export const createSearch = async (
  searchWord: string,
  users: { items: UserProps[] },
  repositories: { items: RepositoryProps[] }
) => {
  const formattedUsers = users.items.map((user: UserProps) => user?.login);
  const formattedRepositories = repositories.items.map(
    (repository: RepositoryProps) => repository.name
  );

  const allFormattedUsersAndRepositories = formattedUsers.concat(
    formattedRepositories
  );

  const data = {
    results: allFormattedUsersAndRepositories,
    searchTerm: searchWord,
    dateSearch: new Date().toISOString(),
  };

  const url = "http://localhost:4001/api/search";

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const getAllSearches = async () => {
  const allSearches = await fetch("http://localhost:4001/api/searches").then(
    (res) => res.json()
  );
  return allSearches as Searches;
};

export const deleteSearch = async (id: string) => {
  const url = `http://localhost:4001/api/search/${id}`;

  await fetch(url, {
    method: "DELETE",
  });
};

export const updateSearch = async (id: string, newComment: string) => {
  const data = {
    comment: newComment,
  };

  const url = `http://localhost:4001/api/search/${id}`;

  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
