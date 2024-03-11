import React, { useEffect, useState } from 'react';

export function IniciarQuiz({ iniciar }) {
    const [numQuestoes, setNumQuestoes] = useState(5);
    const [categoria, setCategoria] = useState('');
    const [dificuldade, setDificuldade] = useState('');
    const [tipo, setTipo] = useState('multiple');

    const categorias = [
        { id: 9, name: 'Conhecimento Geral' },
        { id: 10, name: 'Entretenimento: Livros' },
        { id: 11, name: 'Entretenimento: Filmes' },
        { id: 12, name: 'Entretenimento: Música' },
        { id: 13, name: 'Entretenimento: Musicais & Teatros' },
        { id: 14, name: 'Entretenimento: Televisão' },
        { id: 15, name: 'Entretenimento: Video Games' },
        { id: 16, name: 'Entretenimento: Jogos de Tabuleiro' },
        { id: 17, name: 'Ciência & Natureza' },
        { id: 18, name: 'Ciência: Computadores' },
        { id: 19, name: 'Ciência: Matemática' },
        { id: 20, name: 'Mitologia' },
        { id: 21, name: 'Esportes' },
        { id: 22, name: 'Geografia' },
        { id: 23, name: 'História' },
        { id: 24, name: 'Política' },
        { id: 25, name: 'Arte' },
        { id: 26, name: 'Celebridades' },
        { id: 27, name: 'Animais' },
        { id: 28, name: 'Veículos' },
        { id: 29, name: 'Entretenimento: Quadrinhos' },
        { id: 30, name: 'Ciência: Gadgets' },
        { id: 31, name: 'Entretenimento: Anime & Manga Japonês' },
        { id: 32, name: 'Entretenimento: Desenhos Animados & Animações' },
    ];


    const iniciarQuiz = () => {
        iniciar({
            numQuestoes,
            categoria,
            dificuldade,
            tipo,
        });
    };

    return (
        <section>
            <div className="input-group">
                <label htmlFor="numQuestoes">Número de Questões:</label>
                <select
                    id="num-questions"
                    value={numQuestoes}
                    onChange={(e) => setNumQuestoes(e.target.value)}
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
            </div>
            <div className="input-group">
                <label htmlFor="categoria">Categoria:</label>
                <select
                    id="category"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                >
                    <option value="">Qualquer categoria</option>
                    {categorias.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                            {cat.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="input-group">
                <label htmlFor="dificuldade">Dificuldade:</label>
                <select
                    id="difficulty"
                    value={dificuldade}
                    onChange={(e) => setDificuldade(e.target.value)}
                >
                    <option value="">Qualquer dificuldade</option>
                    <option value="easy">Fácil</option>
                    <option value="medium">Médio</option>
                    <option value="hard">Difícil</option>
                </select>
            </div>
            <div className="input-group">
                <label htmlFor="tipo">Tipo:</label>
                <select
                    id="tipo"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                >
                    <option value="multiple">Múltipla Escolha</option>
                    <option value="boolean">Verdadeiro/Falso</option>
                </select>
            </div>
            <button className="start-button" onClick={iniciarQuiz}>
                Iniciar Quiz
            </button>
        </section>
    )
}