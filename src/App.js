import {BrowserRouter as Router,Route, Switch, Redirect} from 'react-router-dom'
import Login from './login.js'
import Page from './page.js'


export default function App(){
  return(
    <Router>
      <Switch>
        <Route path='/login' component={Login} exact></Route>
        <Route render={()=>localStorage.getItem('isLogin') ? (<Page/>) : (<Redirect to={{pathname:'/login'}}/>)}/>
      </Switch>
    </Router>
  )
}