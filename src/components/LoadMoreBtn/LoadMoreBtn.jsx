import s from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onClick }) => (
    <div className={s.LoadMoreWrapper}>
    <button className={s.LoadMoreBtn} onClick={onClick}>Load more</button></div>
);

export default LoadMoreBtn;