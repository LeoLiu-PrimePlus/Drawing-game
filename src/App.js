import './App.scss';
import CardHeader from './components/CardHeader'
import CardContent from './components/CardContent'

const App = () => {
  return (
    <div className="main container">
      <div className="card col-12 border-l shadow p-0">
        <CardHeader />
        <h4 className="tipTitle">Please add drawinglists before you start this game</h4>
        <CardContent />
      </div>
    </div>
  );
}

export default App;
