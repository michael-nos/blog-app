import '@/styles/BlogCategoryButton.css';

interface BlogCategoryButtonProps {
  categoryType: string;
}

export const BlogCategoryButton = ({
  categoryType,
}: BlogCategoryButtonProps) => {
  return (
    <button className='blogCategoryButton-blog-categories'>
      {categoryType}
    </button>
  );
};
