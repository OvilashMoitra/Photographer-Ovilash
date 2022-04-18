import React from 'react';
import Banner from '../../components/Bannner/Banner';
import Counter from '../../components/Counter/Counter';
import Services from '../Service/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Counter></Counter>
            <Services></Services>
        </div>
    );
};

export default Home;