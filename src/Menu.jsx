import React from 'react';
import { QuestoesTotais } from './Rotas/QuestoesTotais';
import { QuestoesPorCategoria } from './Rotas/QuestoesPorCategoria';
import { ListarCategorias } from './Rotas/ListarCategorias';
import { IniciarQuiz } from './Rotas/IniciarQuiz';
import { Cabecalho } from './Rotas/Cabecalho';
import { Rodape } from './Rotas/Rodape';

function Menu({ iniciar }) {
  return (
    <main>
      <Cabecalho />
      <IniciarQuiz iniciar={iniciar} />
      <ListarCategorias />
      <QuestoesPorCategoria />
      <QuestoesTotais />
      <Rodape />
    </main>
  );
}

export default Menu;
