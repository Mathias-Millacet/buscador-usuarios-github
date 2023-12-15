import React, { createContext, useState, useContext, ReactNode } from "react";
import { UserProps } from "../types/user";
import { RepositoryProps } from "../types/repository";

interface SearchContextProps {
  results: { users: UserProps[]; repositories: RepositoryProps[] };
  setResults: React.Dispatch<
    React.SetStateAction<{ users: UserProps[]; repositories: RepositoryProps[] }>
  >;
  searchWord: string;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [results, setResults] = useState<{
    users: UserProps[];
    repositories: RepositoryProps[];
  }>({ users: [], repositories: [] });
  const [searchWord, setSearchWord] = useState<string>("");

  return (
    <SearchContext.Provider
      value={{ results, setResults, searchWord, setSearchWord }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch should be used inside a SearchProvider");
  }
  return context;
};
