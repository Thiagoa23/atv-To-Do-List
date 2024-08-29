import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Tarefa from './components/Tarefa';
import { useState } from 'react';
import InputTarefa from './components/InputTarefa';

function App() {
  const [pendente, setpendente] = useState([

    //tarefas teste
    { id: 1, text: 'Tarefa 1', status: 'Pendente' },
    { id: 2, text: 'Tarefa 2', status: 'Pendente' },
    { id: 3, text: 'Tarefa 3', status: 'Pendente' },
    { id: 4, text: 'Tarefa 4', status: 'Pendente' },
    { id: 5, text: 'Tarefa 5', status: 'Pendente' },
    { id: 6, text: 'Tarefa 6', status: 'Pendente' },
    { id: 7, text: 'Tarefa 7', status: 'Pendente' },
    { id: 8, text: 'Tarefa 8', status: 'Pendente' },
    { id: 9, text: 'Tarefa 9', status: 'Pendente' },
    { id: 10, text: 'Tarefa 10', status: 'Pendente' },
    { id: 11, text: 'Tarefa 11', status: 'Pendente' },
    { id: 12, text: 'Tarefa 12', status: 'Pendente' },
    { id: 13, text: 'Tarefa 13', status: 'Pendente' },
    { id: 14, text: 'Tarefa 14', status: 'Pendente' },
    { id: 15, text: 'Tarefa 15', status: 'Pendente' },
    { id: 16, text: 'Tarefa 16', status: 'Pendente' },
    { id: 17, text: 'Tarefa 17', status: 'Pendente' },
    { id: 18, text: 'Tarefa 18', status: 'Pendente' },
    { id: 19, text: 'Tarefa 19', status: 'Pendente' },
    { id: 20, text: 'Tarefa 20', status: 'Pendente' }
  ]);

  const [emAndamento, setEmAndamento] = useState([
    
  ]);
  const [concluido, setConcluido] = useState([]);

  const [id, setId] = useState(0); 
  const [tarefaSelecionada, setTarefaSelecionada] = useState(null);

  const [showinput, setshowinput] = useState(false);
  const [textoTarefa, setTexto] = useState('');

  // Verifica se input esta vazio e adiciona nova tarefa a "Pendente"
  const adicionarTarefa = () => {
    if (textoTarefa.trim() === '') return; 
    const novaTarefa = { id: id, text: textoTarefa, status: 'Pendente' };
    setpendente([...pendente, novaTarefa]);
    setTexto('');
    setshowinput(false);
    //incrementa id
    setId(id + 1); 
  };

  //Cancela input da nova tarefa
  const cancelarAdicionarTarefa = () => {
    setTexto(''); 
    setshowinput(false);
  };

  //alterna o estado da variavel selecionada
  const alternarEstado = () => {
    if (!tarefaSelecionada) return;

    const { id, status } = tarefaSelecionada;

    if (status === 'Pendente') {
      setpendente(pendente.filter(i => i.id !== id));
      setEmAndamento([...emAndamento, { ...tarefaSelecionada, status: 'Em Andamento' }]);
    } else if (status === 'Em Andamento') {
      setEmAndamento(emAndamento.filter(i => i.id !== id));
      setConcluido([...concluido, { ...tarefaSelecionada, status: 'Concluído' }]);
    } else if (status === 'Concluído') {
      setConcluido(concluido.filter(i => i.id !== id));
      setpendente([...pendente, { ...tarefaSelecionada, status: 'Pendente' }]);
    }
    
    setTarefaSelecionada(null); 
  };

  //Deleta tarefa selecionada
  const deletarTarefa = () => {
    if (!tarefaSelecionada) return;

    const { id, status } = tarefaSelecionada;

    if (status === 'Pendente') {
      setpendente(pendente.filter(i => i.id !== id));
    } else if (status === 'Em Andamento') {
      setEmAndamento(emAndamento.filter(i => i.id !== id));
    } else if (status === 'Concluído') {
      setConcluido(concluido.filter(i => i.id !== id));
    }

    setTarefaSelecionada(null); 
  };

  return (
    <div className="App">
      <div className='ListaContainer'>       
        <Card title="Pendente">
          {pendente.map(tarefa => (
            <Tarefa 
              key={tarefa.id} 
              textoTarefa={tarefa.text} 
              onClick={() => setTarefaSelecionada(tarefa)} 
            />
          ))}
        </Card>
        <Card title="Em Andamento">
          {emAndamento.map(tarefa => (
            <Tarefa 
              key={tarefa.id} 
              textoTarefa={tarefa.text} 
              onClick={() => setTarefaSelecionada(tarefa)} 
            />
          ))}
        </Card>
        <Card title="Concluído">
          {concluido.map(tarefa => (
            <Tarefa 
              key={tarefa.id} 
              textoTarefa={tarefa.text} 
              onClick={() => setTarefaSelecionada(tarefa)} 
            />
          ))}
        </Card>
      </div>
      <div className='ContainerButtons'>
      <InputTarefa 
          adicionarTarefa={adicionarTarefa} 
          cancelarAdicionarTarefa={cancelarAdicionarTarefa} 
          showinput={showinput}
          textoTarefa={textoTarefa}
          setTexto={setTexto}
        />
        <Button title="adicionar" onClick={() => setshowinput(true)}>Adicionar</Button>
        <Button title="alternar" onClick={alternarEstado}>Alternar</Button>
        <Button title="deletar" onClick={deletarTarefa}>Deletar</Button>
      </div>
    </div>
  );
}

export default App;
