import { BlogCategoryContainer } from '@/components/BlogCategoryContainer';
import { PopularSectionContainer } from '@/components/PopularSectionContainer';
import { WelcomeHeading } from '@/components/WelcomeHeading';
import '@/styles/Main.css';

export const Main = () => {
  return (
    <div className='main-container'>
      <WelcomeHeading />
      <BlogCategoryContainer />
      <PopularSectionContainer />
    </div>
  );
};
