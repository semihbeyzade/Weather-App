import './App.css';
import DataContextProvider from './context/DataContext';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Container />
      </DataContextProvider>
    
    </div>
  );
}

export default App;
