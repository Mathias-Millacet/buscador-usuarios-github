// import { MdLocationPin } from "react-icons/md";
// import { Link } from "react-router-dom";
import classes from "./RepositoryCard.module.css";
import { ReposityProps } from "../../types/repository";

const RepositoryCard = ({
  name,
  stargazers_count,
  forks_count,
  default_branch,
  owner,
}: ReposityProps) => {
  return (
    <div className={classes.user}>
      <img src={owner.avatar_url} alt={owner.login}></img>
      <h2>{owner.login}</h2>
      {/*       {location && (
        <p className={classes.location}>
          <MdLocationPin />
          <span>{location} </span>
        </p>
      )} */}
      <div className={classes.stats}>
        <div>
          <p>Nombre</p>
          <p className={classes.number}>{name}</p>
        </div>
        <div>
          <p>Estrellas </p>
          <p className={classes.number}>{stargazers_count}</p>
        </div>
        <div>
          <p>Forks</p>
          <p className={classes.number}>{forks_count}</p>
        </div>
        <div>
          <p>Rama por defecto</p>
          <p className={classes.number}>{default_branch}</p>
        </div>
      </div>
      {/*    <Link to={`/repos/${login}`}>Mas info</Link> */}
    </div>
  );
};

export default RepositoryCard;
