import { useNavigate } from "react-router-dom";
import classes from "./RecentSearch.module.css";

export const RecentSearch = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/historic-searches");
  };
  return (
    <div className={classes.link} onClick={handleGoBack}>
      Busquedas Recientes
    </div>
  );
};
