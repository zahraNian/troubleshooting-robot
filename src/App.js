import {BrowserRouter as Router,Route, Switch, Redirect} from 'react-router-dom'
import Login from './login.js'
import Page from './page.js'
import StudentInfo from './studentInfo.js'
import TeacherInfo from './teacherInfo.js'
import TeachersList from './teachersList.js'
import StudentsList from './studentsList.js'



export default function App(){
  return(
    <Router>
      <TeacherInfo/>
      <Switch>
        <Route path='/login' component={Login} exact></Route>
        <Route render={()=>localStorage.getItem('isLogin') ? (<Route path='/home' component={Page}></Route>) : (<Redirect to={{pathname:'/login'}}/>)}/>
      </Switch>
    </Router>
  )
}