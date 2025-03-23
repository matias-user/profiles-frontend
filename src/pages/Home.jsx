import { FormUser } from '../components/layout/FormUser'

export const Home = () => {

    return (
        <main className='container-lg' >
            <FormUser urlApi='http://localhost:8080/api/v1/users' /> 
        </main>

    )
}
