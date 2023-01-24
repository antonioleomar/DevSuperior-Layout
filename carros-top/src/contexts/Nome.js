import { useContext } from 'react'
import UserProvider, { UserContext } from './UserProvider'

function Nome() {

    const { alunos } = useContext(UserContext) //Do contexto "UserContext" quero consumir a variável "alunos"

    return (
        <div>
            <span> Bem-vindo:{alunos} </span>
        </div>
    )
}
export default Nome