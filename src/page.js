import styled from 'styled-components'
import './App.css';
import Button from './Button.js'
import Charge from './Charge.js'
import Student from './Student.js'
import Teacher from './Teacher.js'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import TeachersList from './teachersList.js'
import StudentsList from './studentsList.js'

const Row=styled.div({
  display:'flex',
  flexFlow:'row wrap',
  justifyContent:'center',
  alignItems:'flex-start',
  direction:'rtl',
  width:'100%',
})
const Column=styled.div({
  display:'flex',
  flexDirection:'column',
  justifyContent:'flex-start',
  alignItems:'center',
  minWidth:'250px',
  '&>h1':{
    width:'100%',
    textAlign:'right',
    fontFamily:'title',
    paddingTop:'70px',
    marginRight:'30px'
  },
  '&>h2':{
    width:'100%',
    textAlign:'right',
    marginRight:'20px',
    marginBottom:'0px',
    fontFamily:'title',
    fontSize:'20px',
    color:'var(--gray)'
  },
  '&>div.third':{
    width:'100%',
    justifyContent:'space-between',
    marginTop:'40px'
  }
})


export default function Page(){
  return(
    <Router>
      <Switch>
        <Route path='/home'>
          <Row> 
            <Column>
            <h1 > ربات رفع اشکال بارسا </h1>
            <h2>آمار در یک نگاه</h2>
            <Row>
              <Button number={global.convertNumberFromEtoP(243)} text="دانش آموز" link='/studentsList'/>
              <Button number={global.convertNumberFromEtoP(41)} text="معلم"  link='/teacherList'/>
              <Button number={global.convertNumberFromEtoP(765)} text="سوال" />
              <Button number={global.convertNumberFromEtoP(980)} text="اعتبار" />
            </Row>
            <Charge/>
            <Row className="third">
              <Column>
                <h2>دانش آموز جدید</h2>
                <Student />
              </Column>
              <Column>
                <h2>معلم جدید</h2>
                <Teacher/>
              </Column>
            </Row>
          </Column>
        </Row> 
      </Route>
        <Route path='/studentsList' component={StudentsList}></Route>
        <Route path='/teacherList' component={TeachersList}></Route>
      </Switch> 
    </Router>   
  )
}
