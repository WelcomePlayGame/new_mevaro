import classes from './mebli.module.css';
const SecondSection = () => {
  return (
    <main className={`relative pt-[70px] ${classes.container_section_second}`}>
      <div className={`${classes.container_h2}`}>
        <div className={`flex justify-between space-x-4`}>
          <div className={``}>
            <h2 className={`${classes.container_section_second_h2}`}>
              переваги при замовленні:
            </h2>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
};
export default SecondSection;
