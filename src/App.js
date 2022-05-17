import logo from './logo.svg';
import './App.css';

import { Todo } from './components/Todo';

import { Counter } from './components/Counter';

function App() {
  return (
   <div className='count'>
     <Counter initialValue = {0}/>
     <br/> <br/> <br/> <br/>
   <Todo/>
   </div>
  );
}

export default App;
