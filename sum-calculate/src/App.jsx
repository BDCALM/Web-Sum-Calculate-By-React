
import './App.css'; // Import global styles
import SumCalculator from './components/SumCalculator/SumCalculator.jsx';

/**
 * App component chính
 * -> render SumCalculator và áp dụng style global.
 */
function App() {
  return (
    <div className="app-container">
      <SumCalculator />
    </div>
  );
}

export default App;