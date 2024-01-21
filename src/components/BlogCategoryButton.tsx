import '@/styles/BlogCategoryButton.css';

interface BlogCategoryButtonProps {
  category: string;
  onButtonClick: (string: string) => void;
  selectedButton?: string;
}

export const BlogCategoryButton = ({
  category,
  onButtonClick,
  selectedButton,
}: BlogCategoryButtonProps) => {
  return (
    <button
      className={`blogCategoryButton-blog-categories ${
        selectedButton === category &&
        'blogCategoryButton-blog-selected-category'
      }`}
      onClick={(e) => onButtonClick((e.target as HTMLButtonElement).value)}
      value={category}
    >
      {category}
    </button>
  );
};
