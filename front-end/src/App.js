
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Tab from "./components/Tab";
function App() {
  return (
    <div className="App">
<div classname="Container">

      <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>

      <Button as="a" variant="primary">
        Button as link
      </Button>
      
      <Button as="a" variant="success">
        Button as link
      </Button>


    </div>
    <Tab />
    </div>
  );
}

export default App;
