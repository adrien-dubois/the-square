import React from 'react';
import DynamicText from '../../component/DynamicText/DynamicText';
import NavButton from '../../component/NavButton/NavButton';
import Navigation from '../../component/Navigation/Navigation';
import SocialNetwork from '../../component/SocialNetwork/SocialNetwork';
import { 
  HomeContainer, 
  HomeMain, 
  MainContent
} from './Home.elements';

const Home = () => {
  return (
    <main>
        <HomeContainer>
          <Navigation />
          <SocialNetwork />
          <HomeMain>
            <MainContent>
              <h1>The Square.</h1>
              <h2> <DynamicText /> </h2>
            </MainContent>
          </HomeMain>
          <NavButton right={"/collectif"} />
        </HomeContainer>

    </main>
  );
};

export default Home;