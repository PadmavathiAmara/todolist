import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className='parent'>
      <h2>TodoList</h2>
      <div id="child"><TodoList /></div>
    </div>
  );
}

export default App;
