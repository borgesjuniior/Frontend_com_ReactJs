import React from 'react';

function Header(props){ //Passando as propriedades para o componente
    return (
        <header>
            <h1>{props.title}</h1> 

            {props.children} 

        </header>
    )
};

export default Header;

//title é a propriedade que foi passada para o componente
//children dá acesso ao conteúdo que foi criado no componente 