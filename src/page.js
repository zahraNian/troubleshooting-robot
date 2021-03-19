import styled from 'styled-components'
import './App.css';
import Button from './Button.js'
import Button1 from './button2.js'
import Charge from './Charge.js'
import Student from './Student.js'
import Teacher from './Teacher.js'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios'


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
  const[info,setInfo]=useState([])
  const[isEffected, setIsEffected]=useState(false)
  useEffect(()=>{if(!isEffected)
    {setIsEffected(true)
    axios.get(`https://qanda-bot.liara.run/`)
    .then((response)=>{
        setInfo(response.data)})
    .catch(function (error) {
          console.log(error)
          })        
  }})
  return(
    <div>
      
        <Route path='/home'>
          <Row> 
            <Column>
            <h1 > ربات رفع اشکال بارسا </h1>
            <h2>آمار در یک نگاه</h2>
            <Row>
              <Button number={global.convertNumberFromEtoP(info.students ? info.students : null)} text="دانش آموز" link='/studentsList'/>
              <Button number={global.convertNumberFromEtoP(info.teachers ? info.teachers : null)} text="معلم"  link='/teacherList'/>
              <Button1 number={global.convertNumberFromEtoP(info.questions ? info.questions : null)} text="سوال" />
              <Button1 number={global.convertNumberFromEtoP(info.questions ? info.questions : null)} text="اعتبار" />
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
        
       
    </div>   
  )
}
