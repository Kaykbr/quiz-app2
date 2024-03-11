import React, { useState, useEffect } from 'react';

export function QuestoesPorCategoria() {
    const [categoria, setCategoria] = useState('');
    const [todasAsCategorias, setTodasAsCategorias] = useState([]);
    const [numQuestoesPorCategoria, setNumQuestoesPorCategoria] = useState(0);

    useEffect(() => {
        fetch('https://opentdb.com/api_category.php')
            .then((res) => res.json())
            .then((data) => setTodasAsCategorias(data.trivia_categories));
    }, []);

    const buscarQuestoesPorCategoria = () => {
        const categoriaId = todasAsCategorias.find((cat) => cat.name === categoria).id;

        fetch(`https://opentdb.com/api_count.php?category=${categoriaId}`)
            .then((res) => res.json())
            .then((data) => setNumQuestoesPorCategoria(data.category_question_count.total_question_count));
    }

    return (
        <section>
            <div className="input-group">
                <label htmlFor="searchCategory">Escolha uma categoria:</label>
                <select
                    id="searchCategory"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                >
                    <option value="">Todas</option>
                    {todasAsCategorias.map((cat) => (
                        <option key={cat.id} value={cat.name}>
                            {cat.name}
                        </option>
                    ))}
                </select>
                <button onClick={buscarQuestoesPorCategoria}>Buscar</button>
            </div>
            <p>
                {categoria !== '' ? `Há ${numQuestoesPorCategoria} questões disponíveis para a categoria ${categoria}` : ''}
            </p>
        </section>
    );
}