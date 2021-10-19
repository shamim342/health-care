import { Row } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';
import Services from './Services';

const Servicepart = () => {
    const [services] = useFetch();   
    console.log(services);
    return (
        <div className="container">
            <h3 className="text-center my-3">Our Services</h3>
            <Row xs={1} md={2} className="g-4">
            {
                services.map(service=><Services service={service} key={service.id}></Services>)
            }
            </Row>
        </div>
    );
};

export default Servicepart;