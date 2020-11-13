import './main.scss'

import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
import Container from './layout/container/Container'

import { BrowserRouter as Router } from "react-router-dom";

import { useDispatch } from 'react-redux'
import getPosts from './redux/actions/postsAction'
import getSkills from './redux/actions/skillsAction'
import getExperiences from './redux/actions/experiencesAction'
import getQuotes from './redux/actions/quotesAction'
import getPortfolioTags from './redux/actions/portfolioTagsAction'

function App() {
  // const posts = useSelector(state => state.posts);
  // const skills = useSelector(state => state.skills);
  const dispatch = useDispatch();

  dispatch(getPosts())
  dispatch(getSkills())
  dispatch(getExperiences())
  dispatch(getQuotes())
  dispatch(getPortfolioTags())

  return (
    <Router>
      <div className="App">
        <Header />
        <Container />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
