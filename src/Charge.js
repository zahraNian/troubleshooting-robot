import { Link } from 'react-router-dom'
import { useState } from "react"
import styled from 'styled-components'
import axios from 'axios'
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
       backgroundColor:'var(--lightGray)',
       border:'none',
       fontWeight:'bold',
       paddingRight:'20px',
       boxSizing:'border-box'
   },
   '&>button':{
    borderRadius:'var(--borderRadius-div)',
    backgroundColor:'var(--lightBlue)',
    color:'var(--blue)',
    fontFamily:'btnText',
    fontSize:'15px',
    height:'40px',
    textAlign:'center',
    margin:'20px 5px 20px 5px',
    fontWeight:'bold',
    textDecoration: 'none',
    width:'130px',
    border:'none',
    cursor:'pointer'
}
  })
  const Qs=styled.div({
    borderRadius:'20px',
       fontSize:'15px',
       height:'30px',
       margin:'20px 5px 20px 5px',
       width:'calc(100% - 35px)',
       minWidth:'80px',
       maxWidth:'178px',
       fontFamily:'var(--text)',
       backgroundColor:'var(--lightGray)',
       border:'none',
       fontWeight:'bold',
       paddingBottom:'15px',
       textAlign:'center',
       color:'gray',
       '&>h2':{
           fontSize:'15px'
       }
})
  const H2=styled.h2({
    marginRight:'10px',
    width:'100%',
    textAlign:'flex-start',
    fontSize:'20px',
    marginBottom:'15px',
    color:'var(--gray)',
    fontFamily:'title',
})
export default function Charge(){
    const[code, setCode]=useState()
    const [credit, setCredit]=useState()
    const [studentInfo, setStudentInfo]=useState()

    function Esteelam(){
        axios.get('https://qanda-bot.liara.run/students')
        .then((response)=>{
            setStudentInfo(response.data.filter((s)=>{return s.code==code})) 
           
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const CreditReturner=()=>{if(studentInfo) return studentInfo.map((item)=>{return(<Row><Qs><h2> {item.name} </h2></Qs><Qs><h2>اعتبار قبلی: {item.qs}</h2> </Qs><Qs><h2>اعتبار انتخابی : {credit} </h2></Qs><Qs><h2>جمع اعتبارات : {parseInt(credit)+parseInt(item.qs)}</h2></Qs><button onClick={()=>{EditCredit()}}>تایید</button></Row>)})}
    
    function EditCredit(){
        if(studentInfo){
        var data = JSON.stringify({
            qs:parseInt(credit)+parseInt(studentInfo[0].qs)?parseInt(credit)+parseInt(studentInfo[0].qs):studentInfo[0].qs
        })
        var config = {
            method: 'post',
            url: `https://qanda-bot.liara.run/edit/${studentInfo[0]._id}`,
            headers: {
            'Content-Type': 'application/json'
            },
            data: data
        }
        axios(config)
            .then(function (response) {
                alert(`اعتبار ${studentInfo[0].name}  بروزرسانی شد.`)
                response.error?alert(response. error):window.location.reload()
            })
            .catch(function (error) {
            console.log(error)
            })
    
     } }

    return(
        <Column>
            <H2>شارژ سریع</H2>
            <Row>
                <input placeholder='کد دانش آموز' onChange={(a)=>setCode(global.convertNumberFromPtoE(a.target.value))}></input>
                <input placeholder='میزان اعتبار' onChange={(b)=>setCredit(global.convertNumberFromPtoE(b.target.value))}></input>
                <button onClick={()=>{Esteelam()}}>استعلام</button>
                {CreditReturner()}
            </Row>
        </Column>    
    )
}