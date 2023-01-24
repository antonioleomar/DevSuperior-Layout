import { useState, createContext} from 'react'

export const UserContext = createContext({}) //Criando um contexto. Dentro do createContext coloca os valores default iniciais


function UserProvider({children}){  //Provider é a máquina de expalhar para todo mundo. Mas explalhar o que?

    const [alunos, setAlunos] = useState('Marcos Soaresxxx') //é a variável que quero fornecer como global


    return(
        <UserContext.Provider value={{alunos}}> 
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider


