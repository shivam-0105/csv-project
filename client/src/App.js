import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import './App.css';
import Author from './components/Author';
import Books from './components/Books';
import Code from './components/Code';
import Home from './components/Home';
import Magazines from './components/Magazines';
import SearchAuthor from './components/SearchAuthor';
import SearchBook from './components/SearchBook';
import SearchMagazine from './components/SearchMagazine';
import SortData from './components/SortData';

function App() {
	return(
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/code' component={Code} />
				<Route exact path='/authors' component={Author} />
				<Route exact path='/books' component={Books} />
				<Route exact path='/magazines' component={Magazines} />
				<Route exact path='/searchbook' component={SearchBook} />
				<Route exact path='/searchmagazine' component={SearchMagazine} />
				<Route exact path='/searchauthor' component={SearchAuthor} />
				<Route exact path='/sortdata' component={SortData} />
			</Switch>
		</Router>
	);
}

export default App;
