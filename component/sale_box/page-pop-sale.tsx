import React, { useRef } from 'react';
import classes from './page-sale-box.module.css';
import { addEmail as add, checkedEmail } from '@/lib/email';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type TPopSale = {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
};

const PopSale: React.FC<TPopSale> = ({ isChecked, setIsChecked }) => {
  const handleSetIsChecked = () => {
    setIsChecked(!isChecked);
  };

  const emailRef = useRef(null);
  const sendMail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = emailRef.current?.value;

    if (email) {
      const isEmail = await checkedEmail(email);
      if (!isEmail) {
        try {
          await add(formData);
          toast.info('Електронну адресу успішно додано!');
        } catch (error) {
          console.error('Error adding email:', error);
          toast.error(
            'Під час додавання електронної пошти сталася помилка. Спробуйте ще раз.'
          );
        }
      } else {
        toast.warn('Електронна пошта вже існує');
      }
    }
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
          placeholder=" @gmail.com"
          className={`${classes.container_input} py-2 px-4 border rounded`}
          pattern="[a-zA-Z0-9._%+-]+@gmail\.com"
          title="Введіть коректну пошту, закінчення має бути @gmail.com"
          name="email"
          aria-label="Email Address"
          ref={emailRef}
        />

        <button
          type="submit"
          className={`${classes.container_button} py-2 px-4 bg-blue-500 text-white rounded`}
          aria-label="Send Email"
          onClick={handleSetIsChecked}
        >
          Відправити
        </button>
      </form>
      <button
        className={`${classes.container_closed}`}
        onClick={handleSetIsChecked}
        aria-label="Close popup"
      >
        X
      </button>
    </div>
  );
};

export default PopSale;