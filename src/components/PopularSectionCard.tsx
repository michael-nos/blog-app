import '@/styles/PopularSectionCard.css';

interface PopularSectionCardProps {
  category: string;
  date: string;
  name: string;
  title: string;
}

export const PopularSectionCard = ({
  category,
  date,
  name,
  title,
}: PopularSectionCardProps) => {
  return (
    <div className='popularSectionCard-container'>
      <h3 className='popularSectionCard-title'>{title}</h3>
      <span className='popularSectionCard-category-badge'>{category}</span>
      <div className='popularSectionCard-metadata-container'>
        <span>{name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};
