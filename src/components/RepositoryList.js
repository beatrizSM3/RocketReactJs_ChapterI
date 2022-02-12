import { RepositoryItem } from "./RepositoryItem";

const repository={
    name:'Repositório',
    description:'Forms in React',
    link:'https://github.com/unform/unform'
}

export function RepositoryList(){
    return(
        <section className="Repositoty-List">
            <h1>Lista de Repositórios </h1>

                <ul>
                    <RepositoryItem repository={repository}/>
                    <RepositoryItem/>
                </ul>

        </section>
    );
}