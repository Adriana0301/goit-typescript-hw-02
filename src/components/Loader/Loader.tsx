import { InfinitySpin } from "react-loader-spinner";
import s from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={s.Loader}>
      <InfinitySpin />
    </div>
  );
};

export default Loader;
