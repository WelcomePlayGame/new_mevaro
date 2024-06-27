import classes from './page-head.module.css';
const Head = () => {
  return (
    <menu>
      <ul className={`${classes.head_top}`}>
        <li>Головна</li>
        <li>Каталог тканин</li>
        <li>Наші роботи</li>
      </ul>
    </menu>
  );
};
export default Head;
