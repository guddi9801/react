import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './NavMenu';
import Scp from './Scp';
import './index.css';

function ScpWrapper()
{
  const {id} = useParams();
  return <Scp id={id} />;
}

function App() {

  return (
    <Router>
      <div>
        <NavMenu />
          <Routes>
            <Route path="/scp/:id" element={<ScpWrapper/>} />
          </Routes>
      </div>
    </Router>
  )
}

export default App;
