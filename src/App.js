import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Recipes from './page/Recipes'
import DetailRecipes from './page/DetailRecipes'
import Home from './page/Home'
import About from './page/About'
import SaveRecipes from './page/SaveRecipes'

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/detail-recipes/:key" component={DetailRecipes}/>
          <Route path="/saved-recipes" component={SaveRecipes}/>
          <Route path="/recipes" component={Recipes}/>
          <Route path="/about" component={About}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
  );
}

export default App;
