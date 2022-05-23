import { useEffect } from 'react';
import useAPI from '../../Services/APIs/Common/useAPI';
import persons from '../../Services/APIs/Persons/Persons';
import HomeView from './HomeView';


const HomeController = () => {

    const getPersonsGetAPI = useAPI(persons.getPersons);
    useEffect(() => {
        getPersonsGetAPI.request();
    }, []);

    return <HomeView person={getPersonsGetAPI.data} loading={getPersonsGetAPI.loading} error={getPersonsGetAPI.error} />
}


export default HomeController;