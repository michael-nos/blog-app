import { PopularSectionCard } from './PopularSectionCard';
import '@/styles/PopularSectionContainer.css';

const testData = [
  {
    category: 'Technology',
    date: '01/01/2024',
    username: 'jaysontatum',
    title:
      'Wow some really crazy news stuff is going on Wow some really crazy news stuff is going on',
  },
  {
    category: 'Lifestyle',
    date: '01/01/2024',
    username: 'tombrady',
    title: 'Wow some really crazy news stuff is going on',
  },
  {
    category: 'Food',
    date: '01/01/2024',
    username: 'michaeljordan',
    title:
      'Wow some really crazy news stuff is going on Wow some really crazy news stuff is going on Wow some really crazy news stuff is going on',
  },
];

export const PopularSectionContainer = () => {
  return (
    <>
      <h2>What's popular?</h2>
      <div className='popularSectionContainer-container'>
        {testData.map((cardData, index) => (
          <PopularSectionCard
            key={index}
            category={cardData.category}
            date={cardData.date}
            title={cardData.title}
            username={cardData.username}
          />
        ))}
      </div>
    </>
  );
};
