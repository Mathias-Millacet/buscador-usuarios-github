import SearchBar from "../../components/SearchBar/SearchBar";
import ErrorUser from "../../components/Error/Error";
import { UserProps } from "../../types/user";
import { useState } from "react";
import User from "../../components/UserCard/UserCard";
import { searchByUserAndRepository } from "../../api/github";
import ResultList from "../../components/ResultList/ResultList";
import { useSearch } from "../../provider/SearchContext";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const { results, setResults } = useSearch();
  const [error, setError] = useState(false);

  const searchHandler = async (searchWord: string) => {
    setError(false);
    setUser(null);

    const data = await searchByUserAndRepository(searchWord);

    const { users, repositories } = data;

    setResults({ users, repositories });

    console.log("users :>> ", users);
    console.log("repositories :>> ", repositories);
  };

  return (
    <div>
      <SearchBar searchHandler={searchHandler} />
      {results && (
        <ResultList users={results.users} repositories={results.repositories} />
      )}
      {user && <User {...user} />}
      {error && <ErrorUser />}
    </div>
  );
};

export default Home;
