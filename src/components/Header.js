import React from 'react';

function Header({title, children}){ //Passando as propriedades para o componente
    return (
        <header>
            <h1>{title}</h1> 

            {children} 

        </header>
    )
};

export default Header;

//title é a propriedade que foi passada para o componente
//children dá acesso ao conteúdo que foi criado no componente