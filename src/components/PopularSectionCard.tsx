import '@/styles/PopularSectionCard.css';

interface PopularSectionCardProps {
  category: string;
  date: string;
  title: string;
  username: string;
}

export const PopularSectionCard = ({
  category,
  date,
  title,
  username,
}: PopularSectionCardProps) => {
  return (
    <div className='popularSectionCard-container'>
      <h3 className='popularSectionCard-title'>{title}</h3>
      <span className='popularSectionCard-category-badge'>{category}</span>
      <div className='popularSectionCard-metadata-container'>
        <span>{username}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};
