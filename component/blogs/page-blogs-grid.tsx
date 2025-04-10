import Item from './page-blogs-item';
import classes from './page-blogs.module.css';
const Grid = ({ fabrics }) => {
  return (
    <main className={`${classes.container_grid}`}>
      {fabrics.map((fabric: any, index: number) => (
        <div key={index} className="m-[10px]">
          <Item {...fabric} />
        </div>
      ))}
    </main>
  );
};
export default Grid;
