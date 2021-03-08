import styled from 'styled-components'
import './App.css';
import Button from './Button.js'
import Charge from './Charge.js'
import Student from './Student.js'
import Teacher from './Teacher.js'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

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
    textAlign:'right'
  },
  '&>h2':{
    width:'100%',
    textAlign:'right',
    marginRight:'20px'
  },
  '&>div.third':{
    width:'100%',
    justifyContent:'space-between',
    '&>div':{
      
    }
  }
})


export default function App(){
  return(
    <Router>
      <Row> 
        <Column>
          <h1 > ربات رفع اشکال بارسا </h1>
          <h2>امار در یک نگاه</h2>
          <Row>
            <Button number="۲۴۳" text="دانش آموز"  />
            <Button number="۴۱" text="معلم" />
            <Button number="۷۶۵" text="سوال" />
            <Button number="۹۸۰" text="اعتبار" />
          </Row>
          <Charge/>
          <Row className="third">
            <Column>
              <h2>ثبت نام دانش آموز</h2>
              <Student name='سالار رضاپور' code='123456' grade='دهم' majors='تجربی' credit='60'></Student>
            </Column>
            <Column>
              <h2>ثبت نام معلم</h2>
              <Teacher name='سالار رضاپور' code='123456'  lesson='تجربی'></Teacher>
            </Column>
          </Row>
        </Column>
      </Row>  
    </Router>   
  )
}
