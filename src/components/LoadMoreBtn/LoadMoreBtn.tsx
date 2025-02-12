import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => (
  <div className={s.LoadMoreWrapper}>
    <button className={s.LoadMoreBtn} onClick={onClick}>
      Load more
    </button>
  </div>
);

export default LoadMoreBtn;

interface LoadMoreBtnProps {
  onClick: () => void;
}
