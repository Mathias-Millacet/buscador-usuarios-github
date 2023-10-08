import { useNavigate } from "react-router-dom";
import classes from './GoBackArrow.module.css'

export const GoBackArrow = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div onClick={handleGoBack}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classes.backArrowIcon}
        viewBox="0 0 512 512"
      >
        <path
          d="M240 424v-96c116.4 0 159.39 33.76 208 96 0-119.23-39.57-240-208-240V88L64 256z"
          fill="#fff"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="32"
        />
      </svg>
    </div>
  );
};
