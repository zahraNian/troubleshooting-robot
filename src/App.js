import {BrowserRouter as Router,Route, Switch, Redirect} from 'react-router-dom'
import Login from './login.js'
import Page from './page.js'
import StudentInfo from './studentInfo.js'
import TeacherInfo from './teacherInfo.js'


export default function App(){
  return(
    <Router>
      <TeacherInfo/>
      
      
    </Router>
  )
}