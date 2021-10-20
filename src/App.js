import './App.css';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Home from './page/home/Home';
import Header from './components/header/Header';
import Login from './page/login/Login';
import About from './page/about/About';
import NotFound from './page/notFound/NotFound';
import Footer from './page/footer/Footer'
import ServiceDetails from './page/home/ServiceDetails';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './privateRoute/PrivateRoute';
import Blogs from './page/blogs/Blogs';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route  path="/login">
              <Login></Login>
          </Route>
          <Route  path="/about">
              <About></About>
          </Route>
          <Route  path="/blogs">
              <Blogs></Blogs>
          </Route>
          {/* <PrivateRoute  path="/itemDetails">
              <ItemDetails></ItemDetails>
          </PrivateRoute> */}
          <PrivateRoute  path="/serviceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route  path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
     </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
