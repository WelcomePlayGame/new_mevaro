import React from 'react';
import classes from './page-sale-box.module.css';

type TPopSale = {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
};

const PopSale: React.FC<TPopSale> = ({ isChecked, setIsChecked }) => {
  const handleSetIsChecked = () => {
    console.log(isChecked);
    setIsChecked(!isChecked);
  };

  const sendMail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div
      className={
        isChecked
          ? `${classes.container_pop}`
          : `${classes.container_pop_hidden}`
      }
    >
      <form
        className={`${classes.container_form} flex justify-center items-center space-x-2`}
        onSubmit={sendMail}
      >
        <input
          type="email"
          placeholder="Введіть Вашу пошту - @gmail.com"
          className={`${classes.container_input} py-2 px-4 border rounded`}
          pattern="[a-zA-Z0-9._%+-]+@gmail\.com"
          title="Введіть коректну пошту, закінчення має бути @gmail.com"
        />

        <button
          type="submit"
          className={`${classes.container_button} py-2 px-4 bg-blue-500 text-white rounded`}
        >
          Відправити
        </button>
      </form>
      <span
        className={`${classes.container_closed}`}
        onClick={handleSetIsChecked}
      >
        X
      </span>
    </div>
  );
};

export default PopSale;
