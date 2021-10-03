import './App.scss';
import CardHeader from './components/CardHeader'
import CardContent from './components/CardContent'

const App = () => {
  return (
    <div className="main">
      <div className="card border-l shadow">
        <CardHeader />
        <CardContent />
      </div>
    </div>
  );
}

export default App;
