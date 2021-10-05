import './App.scss';
import CardHeader from './components/CardHeader';
import CardContent from './components/CardContent';
import ScrollButton from './components/common/ScrollButton';
import Notify from './components/common/Notify';


const App = () => {
  return (
    <div className="main container">
      <div className="card col-12 border-l shadow p-0">
        <CardHeader />
        <h4 className="tipTitle">Please add drawinglists before you start this game</h4>
        <CardContent />
      </div>
      <ScrollButton />
      <Notify />
    </div>
  );
}

export default App;
