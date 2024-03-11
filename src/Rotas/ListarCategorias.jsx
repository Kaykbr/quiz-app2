import React, { useState, useEffect } from 'react';

export function ListarCategorias() {
    const [todasAsCategorias, setTodasAsCategorias] = useState([]);
    const [mostrarCategorias, setMostrarCategorias] = useState(false);

    const buscarTodasAsCategorias = () => {
        fetch('https://opentdb.com/api_category.php')
            .then((res) => res.json())
            .then((data) => setTodasAsCategorias(data.trivia_categories));
    }

    const manipularCliqueDoBotao = () => {
        buscarTodasAsCategorias();
        setMostrarCategorias(true);
    }

    return (
        <section>
            <button onClick={manipularCliqueDoBotao}>Mostrar todas as categorias</button>
            {mostrarCategorias && todasAsCategorias.map((categoria) => (
                <p key={categoria.id}>{categoria.name}</p>
            ))}
        </section>
    );
}