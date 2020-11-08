import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './page/home'
import DetailRecipes from './page/DetailRecipes'

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/detail-recipes/:key" component={DetailRecipes}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
  );
}

export default App;
