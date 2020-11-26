import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Recipes from './page/Recipes'
import DetailRecipes from './page/DetailRecipes'
import Home from './page/Home'
import About from './page/About'

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/detail-recipes/:key" component={DetailRecipes}/>
          <Route path="/recipes" component={Recipes}/>
          <Route path="/about" component={About}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
  );
}

export default App;
