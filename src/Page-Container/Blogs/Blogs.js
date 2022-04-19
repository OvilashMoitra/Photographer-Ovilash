import React from 'react';
import { Accordion } from 'react-bootstrap';
import Navbar from '../../components/Navbar/Navbar';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='d-flex justify-content-center' style={{ marginTop: '100px' }}>
                <Accordion defaultActiveKey="0" className=' accordian'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> <strong>Difference between authorization and authentication?</strong> </Accordion.Header>
                        <Accordion.Body>
                            Authenication is a process of authenicate someone or something whether it is legit or not.In authentication process, users or persons are verified.It is done before the authorization process.Authorization is the process of verifying what specific applications, files, and data a user has access to.Authorization is after process of authenication.If someone fails in authenication he or she won't have any access of authorization.Authorization determines What permission do user have.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header> <strong>What other services does firebase provide other than authentication?</strong> </Accordion.Header>
                        <Accordion.Body>
                            Firebase is a platfrom by Google .Besdies authenication it provides different services.Other services are written below-
                            <ul>
                                <li>Cloud Firestore.</li>
                                <li>Authentication.</li>
                                <li>Hosting.</li>
                                <li>Cloud Storage.</li>
                                <li>Google Analytics.</li>
                                <li>Predictions.</li>
                                <li>Cloud Messaging.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blogs;