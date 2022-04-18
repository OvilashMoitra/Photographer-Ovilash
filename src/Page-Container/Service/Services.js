import React from 'react';
import Service from '../../components/Service/Service';
import useServices from '../../Hooks/useServices';
import './Services.css'
const Services = () => {
    const [services, setServices] = useServices();
    return (
        <div className='service-container'>
            {
                services.map(elem => <Service
                    key={elem.id}
                    service={elem}
                >

                </Service>)
            }
        </div>
    );
};

export default Services;