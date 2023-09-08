import logo from './logo.svg';
import './App.css';
import ToggleMenu from './components/ToggleMenu/ToggleMenu';

function App() {
  return (
    <div className="App">
      <div className="flex-container">
        <ToggleMenu />
        <div className='Menu-side-content'>
          <div>
            Please use dynamic React components in their respective tasks, which suggests that the solutions should be flexible, scalable, and easily maintainable. Each member should work on their task independently while ensuring compatibility with the other components if needed in the future. Note: The task should be in such a way that any features can be added or removed in the future.
          </div>
          <div>
            Please use dynamic React components in their respective tasks, which suggests that the solutions should be flexible, scalable, and easily maintainable. Each member should work on their task independently while ensuring compatibility with the other components if needed in the future. Note: The task should be in such a way that any features can be added or removed in the future.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
