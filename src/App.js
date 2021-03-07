import styled from 'styled-components'
import './App.css';
import Button from './Button.js'
import Charge from './Charge.js'
import Student from './Student.js'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

const Row=styled.div({
  display:'flex',
  flexFlow:'row wrap',
  justifyContent:'center',
  alignItems:'center',
  direction:'rtl',
  width:'100%'
})
const Column=styled.div({
  display:'flex',
  flexDirection:'column',
  justifyContent:'flex-start',
  alignItems:'center',
  width:'60%',
  minWidth:'260px',
  '&>h1':{
    width:'100%',
    textAlign:'right'
  },
  '&>h2':{
    width:'100%',
    textAlign:'right'
  },
  '&>div.third':{
    width:'100%',
    justifyContent:'center',
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
            <Student name='سالار رضاپور' code='123456' grade='دهم' majors='تجربی' credit='60'></Student>
            <Student name='سالار رضاپور' code='123456' grade='دهم' majors='تجربی'></Student>
          </Row>
        </Column>
      </Row>  
    </Router>   
  )
}
