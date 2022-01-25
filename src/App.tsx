import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import CoursePageContainer from './components/CoursePage/CoursePageContainer';
import ExchangePageContainer from './components/ExchangePage/ExchangePageContainer';
import Header from './components/Header/Header';
import LoginContainer from './components/Login/LoginContainer';

function App() {

  // if (localStorage.token !== 'test') {
  //   return <LoginContainer />
  // }

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/course' element={<CoursePageContainer />} />
          <Route path='/' element={<ExchangePageContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
