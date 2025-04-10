import { useRef, useState } from 'react';
import classes from './page-button.module.css';
const PopCart = ({ isClosed, title, price, discount10, discount5, url }) => {
  const [count, setCount] = useState(1);
  const colorRef = useRef(null);
  const handleMinusCount = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  const handlePlusCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleSum = () => {
    if (count < 10) {
      return count * price * Number(process.env.DOLLAR_RATE);
    } else if (count >= 10 && count <= 20) {
      return count * discount5;
    } else if (count > 20) {
      return count * discount10;
    }
  };
  const sum = handleSum();
  const beginSum = price * Number(process.env.DOLLAR_RATE) * count;
  const handleSubmit = () => {
    sessionStorage.setItem('sum', sum.toString());
    sessionStorage.setItem('url', url);
    sessionStorage.setItem('count', count.toString());
    sessionStorage.setItem('title', title);
    sessionStorage.setItem('colorName', colorRef.current.value);
  };
  return (
    <main className="relative">
      <div
        className={isClosed ? `${classes.pop_onen}` : 'hidden'}
        style={isClosed ? { boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' } : {}}
      >
        <span>Ваше замовлення:</span>
        <div
          className={`${classes.section_sale} flex flex-col items-end mb-[30px]`}
        >
          <span className="m-[5px]">
            від 10 пог.м - {discount5.toFixed(2)} грн./пог.м{' '}
            <span className="bg-[red] text-[#fff] p-[2px]">знижка -5%</span>
          </span>
          <span className="m-[5px]">
            від 20 пог.м - {discount10.toFixed(2)} грн./пог.м{' '}
            <span className="bg-[red] text-[#fff] p-[2px]">знижка -10%</span>{' '}
          </span>
        </div>
        <hr />
        <div className="flex flex-col mt-[30px] ">
          <div
            className={`${classes.container_gap} flex flex-col lg:flex-row lg:justify-between items-center space-x-2`}
          >
            <img
              src={`${process.env.URL_AWS}${url}`}
              alt={title}
              className={`${classes.container_img}`}
            />
            <div>
              <span className="text-[1.5rem]  font-bold">
                {count < 10
                  ? price * Number(process.env.DOLLAR_RATE)
                  : count > 10 && count < 20
                  ? discount5
                  : discount10}
              </span>
              {``} грн./пог.м
            </div>

            <div className={` flex justify-evenly items-center`}>
              <button
                className={`${classes.container_plus_minus}`}
                type="button"
                onClick={handleMinusCount}
              >
                -
              </button>
              <span className="p-[10px]">{count}</span>
              <button
                className={`${classes.container_plus_minus}`}
                type="button"
                onClick={handlePlusCount}
              >
                +
              </button>
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Уточніть колір тканини"
              name="color"
              className={`${classes.container_input}`}
              ref={colorRef}
            />
          </div>
          <div className={`${classes.container_price_general}`}>
            <div>
              <div>Загальна вартість:</div>
              {count > 10 && <div>Знижка:</div>}
              <div>До оплати:</div>
            </div>
            <div className="flex flex-col">
              <span className="text-[25px]">
                {price * Number(process.env.DOLLAR_RATE) * count} грн
              </span>
              {count > 10 && (
                <span>
                  <span className="text-[25px] text-[red] font-bold">
                    {Number(beginSum - sum).toFixed(1)}
                  </span>{' '}
                  грн
                </span>
              )}
              <span className="text-[25px]">{Number(sum).toFixed(1)} грн</span>
            </div>
          </div>
          <div className={`${classes.container_send_next_step}`}>
            <a
              href="/order"
              className={`${classes.send_step_order}`}
              onClick={handleSubmit}
            >
              Оформити замовлення
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PopCart;
