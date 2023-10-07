import { KeyboardEvent } from "react";

import Button from "@material-ui/core/Button";
import classes from "./SearchBar.module.css";
import { useSearch } from "../../provider/SearchContext";

type SearchProps = {
  searchHandler: (userName: string) => Promise<void>;
};

const Search = ({ searchHandler }: SearchProps) => {
  const { searchWord, setSearchWord } = useSearch();

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      searchHandler(searchWord);
    }
  };
  return (
    <div className={classes.search}>
      <h2>Buscar por usuario/repositorio</h2>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Ingrese nombre de usuario o repositorio"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button
          onClick={() => searchHandler(searchWord)}
          size="small"
          variant="contained"
          color="primary"
        >
          Buscar
        </Button>
      </div>
    </div>
  );
};

export default Search;
