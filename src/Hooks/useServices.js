import React, { useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([])
    fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    return [services, setServices]
};

export default useServices;