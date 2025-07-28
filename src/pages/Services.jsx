import { ServicesList } from '../components/services/ServicesList';

export function Services() {
    const list = ['design', 'development', 'marketing', 'ux'];
    return (
        <main>
            <ServicesList  services={list}/>
        </main>
    );
}