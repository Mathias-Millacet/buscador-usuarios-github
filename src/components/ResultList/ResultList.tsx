import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { UserProps } from "../../types/user";
import { ReposityProps } from "../../types/repository";
import classes from "./ResultList.module.css";

type ResultListProp = {
  users: UserProps[];
  repositories: ReposityProps[];
};

const ResultList: FC<ResultListProp> = ({ users, repositories }) => {
  const navigate = useNavigate();
  const handleRedirectUser = (userName: string) => {
    navigate(`/user/${userName}`);
  };

  const handleRedirectRepository = (repoUrl: string) => {
    navigate(`/repository?url=${repoUrl}`);
  };

  return (
    <div className={classes.results}>
      {users?.length > 0 && <h3>Usuarios</h3>}
      <ul className={classes.listaUsers}>
        {users?.map((user: UserProps) => (
          <li
            style={{ cursor: "pointer" }}
            onClick={() => handleRedirectUser(user?.login)}
            key={user?.id}
          >
            Name: {user?.login}
          </li>
        ))}
      </ul>
      {repositories?.length > 0 && (
        <h3>
          Repositorios
          <br />
        </h3>
      )}
      <ul className={classes.listaRepos}>
        {repositories?.map((repository: ReposityProps) => (
          <li
            style={{ cursor: "pointer" }}
            onClick={() => handleRedirectRepository(repository?.url)}
            key={repository?.id}
          >
            Name: {repository?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultList;
