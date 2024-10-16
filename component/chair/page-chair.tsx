import React from 'react';
import classes from '@/component/office_armchair/page-office-armchair.module.css';
const Chair = () => {
  return (
    <main className={`${classes.container_office_armchair}`}>
      <h1>Перетяжка стільчика</h1>
      <div className={`${classes.container_office_armchair_des}`}>
        <img src="./image/chair.jpg" alt="Перетяжка стільчика" />
        <div>
          <h2>Перетяжка стільчика: Нове життя вашому місцю для відпочинку!</h2>
          <p>
            Втомилися від вигляду старого стільчика? Ми знаємо, як його
            перетворити! Пропонуємо послугу перетяжки стільчика з використанням
            якісної тканини з антикігтевим покриттям. Тепер ваш улюблений стілец
            виглядатиме як нове, а якісна тканина гарантує довговічність та
            стійкість до пошкоджень.
          </p>

          <h3>Що ми пропонуємо?</h3>
          <ul>
            <li>
              <strong>Якісна тканина:</strong> Широкий вибір кольорів та текстур
              для створення ідеального стилю вашого офісу.
            </li>
            <li>
              <strong>Антикіготь:</strong> Забудьте про подряпини та пошкодження
              – наші матеріали створені для витривалості.
            </li>
            <li>
              <strong>Безкоштовна доставка по місту Київ:</strong> Забезпечуємо
              швидке та зручне отримання вашого оновленого дивана.
            </li>
          </ul>

          <p>
            Зробіть перший крок до комфорту та стилю в вашій квартирі!
            Замовляйте перетяжку стільчика вже сьогодні та насолоджуйтеся
            бездоганною якістю.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Chair;
