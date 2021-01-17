
import './App.css';
import Header from '../src/Components/Header'
import Sidebar from '../src/Components/Sidebar'
import Feed from '../src/Components/Feed'
function App() {
  return (
    <div className="app">
      
      <Header/>
      <div className="app__body">
      <Sidebar></Sidebar>
      <Feed />  

        </div>
    </div>
  );
}

export default App;
