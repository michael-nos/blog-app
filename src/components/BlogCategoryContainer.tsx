import { BlogCategoryButton } from '@/components/BlogCategoryButton';

const testData = [
  { type: 'Food' },
  { type: 'Lifestyle' },
  { type: 'Technology' },
  { type: 'Travel' },
];

export const BlogCategoryContainer = () => {
  return (
    <div className='blogCategoryContainer-container'>
      {testData.map((category, index) => (
        <BlogCategoryButton categoryType={category.type} key={index} />
      ))}
    </div>
  );
};
