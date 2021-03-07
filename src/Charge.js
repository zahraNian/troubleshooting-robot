import { Link } from 'react-router-dom'
import { useState } from "react";
import styled from 'styled-components'
const Column=styled.div({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
})    
const Row=styled.div({
    display:'flex',
    flexFlow:'row wrap',
    justifyContent:'center',
    alignItems:'center',
    direction:'rtl',
    backgroundColor:'white',
    borderRadius:'15px',
    width:'100%',
    minWidth:'260px',
    maxWidth:'922px',
    boxShadow:'var(--shadow)',
   '&>input':{  
       borderRadius:'20px',
       fontSize:'15px',
       padding:'13px 25px 13px 25px',
       margin:'20px 5px 20px 5px',
       width:'295px',
       minWidth:'190px',
       fontFamily:'var(--text)',
       color:'var(--subText)',
       backgroundColor:'var(--lightGray)',
       border:'none',
       fontWeight:'bold'
   },
   '&>a':{
    borderRadius:'var(--borderRadius-div)',
    backgroundColor:'var(--lightBlue)',
    color:'var(--blue)',
    fontFamily:'var(--btnText)',
    fontSize:'15px',
    padding:'13px 25px 13px 25px',
    boxSizing:'border-box',
    margin:'20px 5px 20px 5px',
    fontWeight:'bold',
    textDecoration: 'none',
    width:'130px',
    textAlign:'center'
}
  })
  const H2=styled.h2({
    marginRight:'10px',
    width:'100%',
    textAlign:'flex-start'
})
export default function Charge(props){
    return(
        <Column>
            <H2>شارژ سریع</H2>
            <Row>
                <input value="کد دانش آموز "></input>
                <input value='میزان اعتبار'></input>
                <Link to={props.link}>استعلام</Link>
            </Row>
        </Column>    
    )
}