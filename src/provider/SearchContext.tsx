import React, { createContext, useState, useContext, ReactNode } from "react";
import { UserProps } from "../types/user";
import { ReposityProps } from "../types/repository";

interface SearchContextProps {
  results: { users: UserProps[]; repositories: ReposityProps[] };
  setResults: React.Dispatch<
    React.SetStateAction<{ users: UserProps[]; repositories: ReposityProps[] }>
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
    repositories: ReposityProps[];
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
