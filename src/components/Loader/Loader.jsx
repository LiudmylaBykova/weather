import { RotatingLines } from "react-loader-spinner";

import css from "../Loader/Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loaderWrap}>
      <RotatingLines
        visible={true}
        height="50"
        width="50"
        strokeColor="var(--main)"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
        className={css.loader}
      />
    </div>
  );
};

export default Loader;
