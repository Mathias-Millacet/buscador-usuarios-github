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
      <div className={classes.listContainer}>
        {users?.map((user: UserProps) => (
          <div
            className={classes.listItem}
            onClick={() => handleRedirectUser(user?.login)}
            key={user?.id}
          >
            {user?.login}
          </div>
        ))}
      </div>
      {repositories?.length > 0 && (
        <h3>
          Repositorios
          <br />
        </h3>
      )}
      <div className={classes.listContainer}>
        {repositories?.map((repository: ReposityProps) => (
          <div
            className={classes.listItem}
            onClick={() => handleRedirectRepository(repository?.url)}
            key={repository?.id}
          >
            {repository?.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultList;
