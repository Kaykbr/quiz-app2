import React from 'react';

function Questao(props) {
  const respostas = props.q && props.q.respostas ? props.q.respostas : [];

  const manipularClique = (resposta) => {
    if (props.q.verificada) {
      return;
    }
    props.selecionarResposta(props.id, resposta);
  };

  const elementosRespostas = respostas.map((resposta, index) => {
    let id = null;
    if (props.q.verificada) {
      if (props.q.correta === resposta) {
        id = 'correta';
      } else if (props.q.selecionada === resposta) {
        id = 'incorreta';
      } else {
        id = 'nao-selecionada';
      }
    }
    return (
      <button
        key={index}
        id={id}
        className={resposta === props.q.selecionada ? 'resposta selecionada' : 'resposta'}
        onClick={() => manipularClique(resposta)}
      >
        {resposta}
      </button>
    );
  });

  return (
    <div className='question-container'>
      <h3 className='question-title' dangerouslySetInnerHTML={{ __html: props.q.questao }} />
      {elementosRespostas}
      <div className='line'></div>
    </div>
  );
}

export default Questao;