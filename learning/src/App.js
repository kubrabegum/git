import './App.css';
import { FunctionClick } from './components/FunctionClick';
import { Greet } from './components/Greet';
import { Hello } from './components/Hello';
import Message from './components/Message';
import { NameList } from './components/NameList';
import Welcome from './components/Welcome';
import Stylesheet from './components/Stylesheet';
import { Inline } from './components/Inline';
import "./components/appstyle.css";
import { List } from './components/List';
import { Product } from './components/Product';
import { Clickme } from './components/Clickme';
import Paragraph from './personal/Paragraph';
import Main from './color/Main';


function App() {
  return (
    <>
    <div className="App">
      {/* <Clickme/>
      <Product/> */}
      {/* <List/> */}
      {/* <h1 className='error'>console</h1> */}
      {/* <Inline/> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <FunctionClick/> */}
      {/* <NameList/> */}
      {/* <Message>
        
      </Message> */}
    {/* <Greet name=' Bruce' heroname='Batman'>
      <p>This is children</p>
    </Greet>
    <Greet name=' Clark' heroname='superman' >
      <button>Action</button>
    </Greet>
    <Greet name=' Diana' heroname='super women'>
      <p>Fed Up!!!!!</p>
    </Greet> */}
    {/* <Welcome name=' Bruce' heroname='Batman'>
      <p>this is children</p>
    </Welcome>
    <Welcome name=' Bruce' heroname='superman'/>
    <Welcome name=' Bruce' heroname='super women'/> */}
    {/* <Hello/> */}
    {/* <Paragraph/> */}
    <Main/>
    </div>
    </>
  );
}

export default App;
