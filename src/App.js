import {BrowserRouter as Router,Route, Switch, Redirect} from 'react-router-dom'
import Login from './login.js'
import Page from './page.js'
import StudentInfo from './studentInfo.js'


export default function App(){
  return(
    <Router>
      <StudentInfo/>
      <Switch>
        <Route path='/login' component={Login} exact></Route>
        <Route render={()=>localStorage.getItem('isLogin') ? (<Page/>) : (<Redirect to={{pathname:'/login'}}/>)}/>
      </Switch>
    </Router>
  )
}