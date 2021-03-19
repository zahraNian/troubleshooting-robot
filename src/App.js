import {BrowserRouter as Router,Route, Switch, Redirect} from 'react-router-dom'
import Login from './login.js'
import Page from './page.js'
import StudentInfo from './studentInfo.js'
import TeacherInfo from './teacherInfo.js'
import TeachersList from './teachersList.js'
import StudentsList from './studentsList.js'
import ProtectedRoute from './protectedRoute.js'

export default function App(){
  return(
    <Router>
      <Switch>
          <Route path='/login' component={Login} exact></Route>
          <ProtectedRoute exact path='/home' component={Page} />
          <ProtectedRoute  path="/studentsList" component={StudentsList} />
          <ProtectedRoute  path="/teacherList" component={TeachersList} />
          <ProtectedRoute  path="/teacherInfo/:teacherId" component={TeacherInfo} />
          <ProtectedRoute  path="/studentInfo/:studentId" component={StudentInfo} />
          
      </Switch>
    </Router>
  )
}









