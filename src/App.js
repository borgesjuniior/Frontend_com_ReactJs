import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Summer from './assets/summer.jpg'
/**
 * Componente 
 * Propriedade
 * Estado
 */
function App(){ 
    const [projects, setProject] = useState(['Desenvolvimento de app', 'Front-end com web']);
    /**
     * useState retorna um array com duas posições
     * 1ª Variável com seu valor inicial
     * 2ª Função para atualizar esse valor
     */
    function handleAddProjects() {
        //projects.push(`Novo projeto ${Date.now()}`);
        setProject([...projects, `Novo projeto ${Date.now()}`])
    }

    return (
        <>
        <Header title="Projects">
            <img width="80" src={Summer} alt="Austin Mahone"/>
            <ul>Lista de projetos</ul> 
        </Header>

        

        <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
        </ul>

        <button type="button" onClick={handleAddProjects}>Adicionar projeto</button>

        </>
    )
};

export default App;