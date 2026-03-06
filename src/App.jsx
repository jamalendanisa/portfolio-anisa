import parse from 'html-react-parser';
import docs from './portfolio.html'; 

const App = () => {
  return parse(docs);
};

export default App;
