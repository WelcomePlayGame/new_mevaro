import React from 'react';

interface Category {
  title: string;
}

interface SelectedCategoryProps {
  onSelected: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectedCategory: React.FC<SelectedCategoryProps> = ({ onSelected }) => {
  const categories: Category[] = [
    { title: 'рогожка' },
    { title: 'велюр' },
    { title: 'замша' },
    { title: 'мікровелюр' },
    { title: '' },
    { title: 'шеніл' },
    { title: 'шкірзамінник' },
  ];

  return (
    <main className={`w-[200px] mt-[50px]`}>
      <select onChange={onSelected} className={``} required>
        {categories.map((category, index) => (
          <option key={index} value={category.title}>
            {category.title}
          </option>
        ))}
      </select>
    </main>
  );
};

export default SelectedCategory;
