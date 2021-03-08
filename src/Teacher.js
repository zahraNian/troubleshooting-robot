import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {useState} from 'react'

const Total=styled.div({
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:'15px',
    boxShadow:'var(--shadow)',
    margin:'15px',
    width:'calc(100% - 20px)',
    minWidth:'260px',
    maxWidth:'500px',
    paddingTop:'20px',
    boxSizing:'border-box'
})
const Row=styled.div({
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    })
const Column=styled.div({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'calc(100% - 40px)',
    maxWidth:'500px',
    '&>div.title':{
        margin:'0px 47px',
        height:'110px'
    },
    '&>div.newLesson':{
        width:'100%',
        minWidth:'200px',
        maxWidth:'500px',
        height:'40px',
        justifyContent:'space-between',
        '&>button':{
            width:'155px',
            backgroundColor:'white',
            border:'none',
            color:'blue',
            cursor:'pointer',
            fontSize:'15px',
            fontWeight:'bold',
        }
    },
    '&>div':{
        borderRadius:'none',
        boxShadow:'none',
        width:'100%',
        height:'110px',
        '&>h2':{
            color:'var(--subText)',
            fontSize:'15px',
            textAlign:'right',
            width:'100%',
            minWidth:'200px',
            maxWidth:'430px',
        },
        '&>input':{
            borderRadius:'20px',
            fontSize:'20px',
            width:'100%',
            minWidth:'220px',
            maxWidth:'450px',
            fontFamily:'var(--text)',
            backgroundColor:'var(--lightGray)',
            border:'none',
            fontWeight:'bold',
            height:'50px',
            paddingRight:'20px',
            boxSizing:'border-box',
            color:'var(--gray)',
        }
    },
    '&>div.button':{
        justifyContent:'flex-end',
        margin:'0px 20px',
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
            margin:'20px 0px',
            fontWeight:'bold',
            textDecoration: 'none',
            width:'130px',
            textAlign:'center'
        }
    }    
})
export default function Teacher(props){  
    const [Name,setName]=useState()
    const [Code,setCode]=useState()
    const [Lesson,setLesson]=useState()
    const [arr,setArr]=useState([]) 
    const DarseJadid=(Lesson)=>{
        let _arr=arr 
        _arr.push(Lesson.target.value)
        setArr(_arr)
    }
    return(
        <Total>
            <Column>
                <Column>
                    <h2>نام معلم</h2>
                    <input  onChange={(a)=>setName(a.target.value)}></input>
                </Column>
                <Column>
                    <h2>کد معلم</h2>
                    <input onChange={(b)=>setCode(b.target.value)}/>
                </Column>
                <Column className='title'>
                    <Row className='newLesson'><h2>درس</h2><button onClick={DarseJadid}>+درس جدید</button></Row>
                    <input onChange={(c)=>setLesson(c.target.value)}></input>
                </Column>
                <Row className='button'>
                    <Link to={props.link}>ثبت</Link>
                </Row>
            </Column>
        </Total>    
    )
}