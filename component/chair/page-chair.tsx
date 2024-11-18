import React from 'react';
import classes from '@/component/office_armchair/page-office-armchair.module.css';
import Image from 'next/image';
const Chair = () => {
  return (
    <section className={`${classes.container_office_armchair}`}>
      <h2 className={`${classes.container_office_armchair_h2}`}>
        Перетяжка стільчика
      </h2>
      <div className={`${classes.container_office_armchair_des}`}>
        <Image
          src="/image/chair.jpg"
          alt="Перетяжка стільчика"
          width={600}
          height={300}
        />
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
    </section>
  );
};

export default Chair;
