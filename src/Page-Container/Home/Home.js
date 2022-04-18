import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Banner from '../../components/Bannner/Banner';
import Counter from '../../components/Counter/Counter';
import NavBar from '../../components/Navbar/Navbar';
import authenication from '../../firebase/firebase.init';
import Services from '../Service/Services';

const Home = () => {
    const [user] = useAuthState(authenication)
    console.log(user)
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Counter></Counter>
            <Services></Services>
        </div>
    );
};

export default Home;