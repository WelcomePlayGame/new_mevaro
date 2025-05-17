import classes from './page-table-prices.module.css';

const priceData = [
  {
    name: 'Диван прямий',
    fabric: '8–15 м',
    price: '11500',
  },
  {
    name: 'Кутовий диван',
    fabric: '16–25 м',
    price: '16900',
  },
  {
    name: 'Крісло',
    fabric: '4–6 м',
    price: '6100',
  },
  {
    name: 'Офісне Крісло',
    fabric: '2–3 м',
    price: '4200',
  },
  {
    name: 'Стілець',
    fabric: '1–2 м',
    price: '700',
  },
  {
    name: 'Стілець зі спинкою',
    fabric: '1.5–2.5 м',
    price: '1500',
  },
  {
    name: 'Ліжко з м’яким узголів’ям',
    fabric: '5–9 м',
    price: '8700',
  },
  {
    name: 'Банкетка',
    fabric: '1–2 м',
    price: '1200',
  },
];

const TablePrices = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': priceData.map((item) => ({
      '@type': 'Product',
      'name': item.name,
      'description': 'Послуга з перетяжки меблів',
      'offers': {
        '@type': 'Offer',
        'price': item.price,
        'priceCurrency': 'UAH',
        'availability': 'https://schema.org/InStock'
      },
      'additionalProperty': {
        '@type': 'PropertyValue',
        'name': 'Витрата тканини',
        'value': item.fabric
      }
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={classes.table_container}>
        <h3 className={classes.h3_container}>Орієнтовна Вартість перетяжки меблів</h3>
        <table className={classes.price_table}>
          <thead>
            <tr>
              <th>Виріб</th>
              <th>Витрата тканини</th>
              <th>Вартість від</th>
            </tr>
          </thead>
          <tbody>
            {priceData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.fabric}</td>
                <td>від {item.price} грн</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TablePrices;
