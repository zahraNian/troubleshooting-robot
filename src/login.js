import {useState} from 'react'
import styled from 'styled-components'
import './App.css'
import React from 'react';
import {useHistory } from 'react-router-dom';

const Container=styled.div({
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',
    backgroundColor:'var(--back)',
    fontFamily:'text'
})
const Column=styled.div({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    maxWidth:'400px',
    minWidth:'260px',
    backgroundColor:'white',
    margin:'0px 10px',
    padding:'50px 0px',
    borderRadius:'40px',
    textAlign:'center',
    boxShadow:'var(--shadow)',
    '&>h1':{
        margin:'0px 0px 40px 0px',
        fontFamily:'title',
        color:'var(--gray)',
        fontSize:'25px'
    }
  })
  const Input=styled.input({
    borderRadius:'20px',
    fontSize:'20px',
    width:'90%',
    maxWidth:'38000px',
    minWidth:'240px',
    fontFamily:'var(--text)',
    backgroundColor:'var(--lightGray)',
    border:'none',
    fontWeight:'bold',
    height:'50px',
    paddingRight:'20px',
    boxSizing:'border-box',
    color:'var(--gray)',
    margin:'15px 10px',
    direction:'rtl',
    fontSize:'15px'
  })
  const Button=styled.button({
    borderRadius:'var(--borderRadius-div)',
    backgroundColor:'var(--lightBlue)',
    color:'var(--blue)',
    fontFamily:'btnText',
    fontSize:'15px',
    height:'40px',
    textAlign:'center',
    boxSizing:'border-box',
    margin:'40px 0px -10px 0px',
    fontWeight:'bold',
    textDecoration: 'none',
    width:'130px',
    textAlign:'center',
    border:'none'
  })
export default function Login(){
    const[userName, setUserName]=useState()
    const[passWord, setPass]=useState()
    const history = useHistory();
    
      localStorage.setItem('نام کاربری','zahra')
      localStorage.setItem('رمز عبور', 123)
      
      function logIn(){
        let name=localStorage.getItem('نام کاربری')
        let pass=localStorage.getItem('رمز عبور')
        if(name === userName && pass === passWord){
        history.push("/page")
        localStorage.setItem('isLogin',true)
        }
      }
    
    return(
        <Container>
                <Column>
                    <h1>پنل مدیریت ربات رفع اشکال بارسا</h1>
                    <Input placeholder='نام کاربری' onChange={(a)=>setUserName(a.target.value)}></Input>
                    <Input placeholder='کلمه عبور' onChange={(b)=>setPass((b.target.value))}></Input>
                    <Button  onClick={logIn}>ورود</Button>
                </Column>
        </Container>
    )
}
