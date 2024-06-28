import classes from './page-head.module.css';
const Head = () => {
  return (
    <menu>
      <ul className={`${classes.head_top}`}>
        <li>Головна</li>
        <li>Каталог тканин</li>

        <li>
          <a href="#block">Заміна пружинного блока</a>
        </li>
        <li>
          <a href="#reviews">Відгуки</a>
        </li>
      </ul>
    </menu>
  );
};
export default Head;
