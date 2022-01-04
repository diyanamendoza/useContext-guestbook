import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import Login from './views/Auth/Login';
import Home from "./views/Home/Home";
import Layout from "./views/Layout/Layout";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export default function App() {
  return (
    <AuthProvider>
      <Router>

        <Layout>

          <Switch>
            <PrivateRoute exact path='/'>
              <Home />
            </PrivateRoute>
            <Route path='/login'>
                <Login />
            </Route>
          </Switch>

        </Layout>

      </Router>
    </AuthProvider>
    )
}
