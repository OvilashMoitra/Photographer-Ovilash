import { faCalendarAlt, faPeopleGroup, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CountUp from 'react-countup';
import './Counter.css'
import { motion } from "framer-motion"
const Counter = () => {
    return (
        <div className='d-flex my-5 justify-content-center'>
            <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ ease: "easeOut", duration: 2 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className='ms-5 counter text-center d-flex flex-column justify-content-center'><FontAwesomeIcon icon={faThumbsUp}
                ></FontAwesomeIcon><p>Customer Recommendation </p><div><CountUp end={90} />%</div></motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ ease: "easeOut", duration: 2 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className='ms-5 counter text-center d-flex flex-column justify-content-center'><FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon><p>Happy Customers</p> <div><CountUp end={2000} />+</div></motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ ease: "easeOut", duration: 2 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className='ms-5 counter text-center d-flex flex-column justify-content-center'><FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon><p>Work Experience</p> <div><CountUp end={3} />+</div></motion.div>
        </div>
    );
};

export default Counter;