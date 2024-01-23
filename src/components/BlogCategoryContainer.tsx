import { BlogCategoryButton } from '@/components/BlogCategoryButton';
import { useState } from 'react';

const testData = [
  { type: 'Food' },
  { type: 'Lifestyle' },
  { type: 'Technology' },
  { type: 'Travel' },
];

export const BlogCategoryContainer = () => {
  const [selectedButton, setSelectedButton] = useState<string | undefined>(
    undefined
  );

  const onButtonClick = (value: string) => {
    if (value === selectedButton) {
      setSelectedButton(undefined);
    } else setSelectedButton(value);
  };

  return (
    <div className='blogCategoryContainer-container'>
      {testData.map((category, index) => (
        <BlogCategoryButton
          category={category.type}
          key={index}
          onButtonClick={onButtonClick}
          selectedButton={selectedButton}
        />
      ))}
    </div>
  );
};
