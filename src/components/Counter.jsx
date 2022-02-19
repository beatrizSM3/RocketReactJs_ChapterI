import { useState} from 'react';

//hook->gancho->'use'

//useState()
//O react não monitora variáveis-> 
//não é possível saber quando o valor de uma variável foi incrementada
//usa-se useState para isso

//useEffect -> quero executar algo quando algo acontecer, ex:
//renderizar algo em tela novamente quando uma variável mudar, recebe (função, variavel que dispara a função)

//key, quando faz um map(em lista, object, dict etc) o 1° elemento do map precisa ter uma propriedade key para o react encontra-lo na hora de remover da tela e etc



export function Counter(){
    const [counter,setCounter]=useState(0);

    function Increment(){
        setCounter(counter+1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={Increment}> Adicionar </button>
        </div>
    )
}