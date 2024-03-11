import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Questao from './Question';
import { nanoid } from 'nanoid';


async function obterQuestao(num, cat, diff, type) {
  const res = await fetch(`https://opentdb.com/api.php?amount=${num}&category=${cat}&difficulty=${diff}&type=${type}`);
  const data = await res.json();
  return data.results.map(questao => ({
    id: nanoid(),
    respostas: embaralharArray([...questao.incorrect_answers, questao.correct_answer]),
    questao: questao.question,
    correta: questao.correct_answer,
    selecionada: null,
    verificada: false,
  }));
}

function embaralharArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function App() {
  const [iniciado, setIniciado] = useState(false);
  const [questoes, setQuestoes] = useState([]);
  const [verificado, setVerificado] = useState(false);
  const [corretas, setCorretas] = useState(0);

  function verificarRespostas() {
    if (questoes.every(questao => questao.selecionada !== null)) {
      setQuestoes(questoes.map(questao => {
        return { ...questao, verificada: true };
      }));
      setVerificado(true);
      setCorretas(questoes.reduce((corretas, questao) => corretas + (questao.correta === questao.selecionada), 0));
    }
  }

  function selecionarResposta(id, resposta) {
    setQuestoes(questoes.map(questao => {
      if (questao.id === id) {
        return { ...questao, selecionada: resposta };
      } else {
        return questao;
      }
    }));
  }

  function jogarNovamente() {
    setIniciado(false);
    setVerificado(false);
  }

  function iniciar(opcoes) {
    setIniciado(true);

    console.log(opcoes);
    obterQuestao(opcoes.numQuestoes, opcoes.categoria, opcoes.dificuldade, opcoes.tipo).then(setQuestoes);
  }

  return (
    <>
      <link rel="stylesheet" href="App.css" />
      <div className='main-container'>
        <div className='content-container'>
          {iniciado ? (
            <div className='start-content-container'>
              {questoes.map(questao => (
                <Questao
                  key={questao.id}
                  q={questao}
                  selecionarResposta={selecionarResposta}
                  id={questao.id}
                />
              ))}
              <div className='end-div'>
                {verificado && (
                  <span className='score'>
                    Você acertou {corretas}/{questoes.length} respostas corretas
                  </span>
                )}
                <br />
                <button className='check' onClick={verificado ? jogarNovamente : verificarRespostas}>
                  {verificado ? 'Jogar Novamente' : 'Verificar Resposta'}
                </button>
              </div>
            </div>
          ) : (
            <Menu iniciar={iniciar} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;