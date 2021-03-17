import {BrowserRouter as Router,Route, Switch, Redirect} from 'react-router-dom'
import Login from './login.js'
import Page from './page.js'
import StudentInfo from './studentInfo.js'
import TeacherInfo from './teacherInfo.js'
import TeachersList from './teachersList.js'
import StudentsList from './studentsList.js'

const Gholam=localStorage.getItem('isLogin');

export default function App(){
  
  return(
    <Router>
      <Switch>
        <Route path='/login' component={Login} exact></Route>
         <Route component={Page} path='/home'></Route>
       <Route path='/studentsList' component={StudentsList}></Route>
        <Route path='/teacherList' component={TeachersList}></Route>
        <Route path='/teacherInfo/:teacherId' component={TeacherInfo}></Route>
        <Route path='/studentInfo/:studentId' component={StudentInfo}></Route>
      </Switch>
    </Router>
  )
}