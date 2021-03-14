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
    boxSizing:'border-box',
})
const Row=styled.div({
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        '&>div':{
            width:'100%',
            margin:'0px',
            '&>h2':{
                color:'var(--subText)',
                fontSize:'15px',
                width:'100%',
                textAlign:'right',
            },
            '&>input':{
                borderRadius:'20px',
                fontSize:'20px',
                width:'100%',
                minWidth:'100px',
                maxWidth:'200px',
                fontFamily:'text',
                backgroundColor:'var(--lightGray)',
                border:'none',
                fontWeight:'bold',
                height:'50px',
                paddingRight:'20px',
                boxSizing:'border-box',
                color:'var(--gray)'
            }
        }
    })
const Column=styled.div({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    margin:'0px 20px',
    '&>div':{
        borderRadius:'none',
        boxShadow:'none',
        width:'100%',
        height:'110px',
        '&>h2':{
            color:'var(--subText)',
            fontSize:'15px',
            width:'100%',
            textAlign:'right',
            minWidth:'200px',
            maxWidth:'430px'
        },
        '&>input':{
            borderRadius:'20px',
            fontSize:'20px',
            width:'100%',
            minWidth:'200px',
            maxWidth:'450px',
            fontFamily:'var(--text)',
            backgroundColor:'var(--lightGray)',
            border:'none',
            fontWeight:'bold',
            height:'50px',
            paddingRight:'20px',
            boxSizing:'border-box',
            color:'var(--gray)'
        }
    },
    '&>div.button':{
        justifyContent:'flex-end',
        '&>a':{
            borderRadius:'var(--borderRadius-div)',
            backgroundColor:'var(--lightBlue)',
            color:'var(--blue)',
            fontFamily:'btnText',
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
export default function Srudent(props){  
    const [Name,setName]=useState([])
    const [Code,setCode]=useState([])
    const [Grade,setGrade]=useState([])
    const [Majors,setMajors]=useState([]) 
    const [Credit,setCredit]=useState([]) 
    return(
        <Total>
            <Column>
                <Column>
                    <h2>نام دانش آموز</h2>
                    <input placeholder='سالار رضاپور' onChange={(b)=>setCode(b.target.value)}></input>
                </Column>
                <Column>
                    <h2>کد دانش آموز</h2>
                    <input placeholder={global.convertNumberFromEtoP(123456)} onChange={(b)=>setCode(global.convertNumberFromPtoE(b.target.value))}></input>
                </Column>
                <Row>
                    <Column>
                        <h2>پایه</h2>
                        <input placeholder='دهم' onChange={(b)=>setCode(b.target.value)}></input>
                    </Column>
                    <Column>
                        <h2>رشته</h2>
                        <input placeholder='تجربی' onChange={(b)=>setCode(b.target.value)}></input>
                    </Column>
                </Row>
                <Column>
                    <h2>اعتبار</h2>
                    <input placeholder={global.convertNumberFromEtoP(60)}  onChange={(d)=>setCode(global.convertNumberFromPtoE(d.target.value))}></input>
                </Column>
                <Row className='button'>
                    <Link to={props.link}>ثبت</Link>
                </Row>
            </Column>
        </Total>
    )
}