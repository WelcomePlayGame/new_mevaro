import Item from './page-fabrics-item';
import classes from './page-fabrics.module.css';
const Grid = ({ fabrics }) => {
  return (
    <main className={`${classes.container_grid}`}>
      {fabrics.map((fabric: any, index: number) => (
        <div key={index}>
          <Item {...fabric} />
        </div>
      ))}
    </main>
  );
};
export default Grid;
