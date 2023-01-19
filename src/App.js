import './App.css';
import PersonCardque from './components/PersonCardque ';

function App() {
  return (
    <div className='container'>
      <div className="App">
        <PersonCardque 
        firstName="Doe" 
        lastName="Jane" 
        age={45}
        hairColor="Black"/> 
        <PersonCardque 
        firstName="Smith" 
        lastName="John" 
        age={88}
        hairColor="Brow" /> 
          
      </div>
    </div>
    
  );
}

export default App;
