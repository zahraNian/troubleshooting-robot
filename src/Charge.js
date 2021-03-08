import { Link } from 'react-router-dom'
import { useState } from "react";
import styled from 'styled-components'
const Column=styled.div({
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'calc(100% - 20px)',
    marginTop:'40px'
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
    maxWidth:'925px',
    boxShadow:'var(--shadow)',
   '&>input':{  
       borderRadius:'20px',
       fontSize:'15px',
       height:'40px',
       margin:'20px 5px 20px 5px',
       width:'calc(100% - 35px)',
       minWidth:'130px',
       maxWidth:'365px',
       fontFamily:'var(--text)',
       color:'var(--subText)',
       backgroundColor:'var(--lightGray)',
       border:'none',
       fontWeight:'bold',
       paddingRight:'20px',
       boxSizing:'border-box'
   },
   '&>a':{
    borderRadius:'var(--borderRadius-div)',
    backgroundColor:'var(--lightBlue)',
    color:'var(--blue)',
    fontFamily:'var(--btnText)',
    fontSize:'15px',
    height:'40px',
    textAlign:'center',
    paddingTop:'10px',
    boxSizing:'border-box',
    margin:'20px 5px 20px 5px',
    fontWeight:'bold',
    textDecoration: 'none',
    width:'130px'
}
  })
  const H2=styled.h2({
    marginRight:'10px',
    width:'100%',
    textAlign:'flex-start',
    fontSize:'20px',
    marginBottom:'15px',
    color:'var(--gray)'
})
export default function Charge(props){
    return(
        <Column>
            <H2>شارژ سریع</H2>
            <Row>
                <input placeholder='کد دانش آموز' ></input>
                <input placeholder='میزان اعتبار'></input>
                <Link to={props.link}>استعلام</Link>
            </Row>
        </Column>    
    )
}