import React from 'react';
import classes from './page-replace-block.module.css';
import Image from 'next/image';
import Reviews from '../reviews/page-reviews';
import WorkLocation from '../work_location/page-work-location';
const ReplaceBlock = () => {
  return (
    <section id="block" className={`${classes.container_block} pt-[30px]`}>
      <h2>Заміна пружинного блока</h2>
      <div className={`${classes.container_div} `}>
        <Image
          src={'/image/block.jpg'}
          width={600}
          height={600}
          alt="Заміна пружинного блоку"
        />
      </div>

      <div className={`${classes.container_price_block}`}>
        <div className={`${classes.container_one_block}`}>
          <h3>Бюджет</h3>
          <span>5000 грн</span>
          <div className={`${classes.container_ul_block}`}>
            <ul>
              <li>Заміна Пружинного Блока</li>
              <li>Гарантія 12 місяців</li>
              <li>Безкоштовна Доставка</li>
            </ul>
          </div>
        </div>
        <div className={`${classes.container_one_block_main}`}>
          <h3>Середній </h3>
          <span>5500 грн</span>
          <div className={`${classes.container_ul_block}`}>
            <ul>
              <li>Заміна Пружинного Блока</li>
              <li>Гарантія 12 місяців</li>
              <li>Безкоштовна Доставка</li>
              <li>Заміна Поролона</li>
              <li>Заміна Войлока</li>
            </ul>
          </div>
        </div>
        <div className={`${classes.container_one_block}`}>
          <h3>Люкс</h3>
          <span>6500 грн +-</span>
          <div className={`${classes.container_ul_block}`}>
            <ul>
              <li>Заміна Пружинного Блока</li>
              <li>Гарантія 12 місяців</li>
              <li>Безкоштовна Доставка</li>
              <li>Заміна Поролона</li>
              <li>Заміна Войлока</li>
              <li>Заміна Тканини</li>
            </ul>
          </div>
        </div>
      </div>
      
<div className={`${classes.describe_block}`}>
<p>
        Пружинний блок типу <strong>Боннель</strong> — це класичне рішення, яке роками використовували у виготовленні диванів, матраців та іншої м’якої меблів. Однак з часом пружини можуть втрачати еластичність, починають скрипіти або деформуються, що знижує комфорт і впливає на здоров’я спини. Якщо ваш диван або матрац втратив пружність — настав час замінити пружинний блок.
      </p>

      <h3>Коли потрібна заміна?</h3>
      <ul>
        <li>Відчутне <strong>просідання</strong> меблів у певних зонах</li>
        <li><strong>Скрип</strong> або інші сторонні звуки під час використання</li>
        <li><strong>Деформація</strong> поверхні</li>
        <li>Відчуття дискомфорту або болю у спині після сну чи відпочинку</li>
      </ul>

      <h3>Як ми виконуємо заміну?</h3>
      <ol>
        <li><strong>Оцінка стану меблів.</strong> Наші майстри перевіряють ступінь зносу пружинного блоку.</li>
        <li><strong>Демонтаж старих пружин.</strong> Обережно видаляємо зношений блок.</li>
        <li><strong>Встановлення нового блоку Боннель</strong> або сучаснішої альтернативи (на вибір клієнта).</li>
        <li><strong>Закріплення шару поролону</strong> та оббивки — на завершення меблі виглядають як нові.</li>
      </ol>

      <h3>Переваги заміни пружинного блоку:</h3>
      <ul>
        <li>Відновлення <strong>комфорту та підтримки</strong> тіла</li>
        <li>Подовження терміну експлуатації меблів</li>
        <li>Економія в порівнянні з покупкою нових меблів</li>
        <li>Можливість оновити також оббивку (за бажанням клієнта)</li>
      </ul>

      <h3>Чому обирають нас?</h3>
      <ul>
        <li>Працюємо швидко та акуратно</li>
        <li>Використовуємо якісні матеріали</li>
        <li>Даємо гарантію на роботи</li>
        <li>Індивідуальний підхід до кожного замовлення</li>
      </ul>
</div>
<hr/>
    </section>
  );
};

export default ReplaceBlock;
