import { RepositoryItem } from "./RepositoryItem";
import "../styles/repository.scss"
import { useState,useEffect } from "react";

type Repository={
    name: string;
    description:string;
    html_url:string;
}

export function RepositoryList(){
    const [repositories,setRepositories]=useState<Repository[]>([]);

    useEffect(()=>{
        fetch ('https://api.github.com/orgs/rocketseat/repos')
        .then(response=>response.json())
        .then(data=>setRepositories(data))

    },[]); 
    
    //quando o 2° parametro é [] só executa uma úncia vez quando o 
    //componente é renderizado

    return(
        <section className="repository-list">
            <h1>Lista de Repositórios </h1>

                <ul>
                    {repositories.map(repository => {
                        return (
                        <RepositoryItem key={repository.name} repository={repository}/>
                        )
                    })}
                    
                </ul>

        </section>
    );
}