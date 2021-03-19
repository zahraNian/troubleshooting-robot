import styled from 'styled-components'
import {useState} from 'react'
import axios from 'axios'

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
    maxWidth:'440px',
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
            maxWidth:'440px',
            fontFamily:'text',
            backgroundColor:'var(--lightGray)',
            border:'none',
            fontWeight:'bold',
            height:'50px',
            paddingRight:'20px',
            boxSizing:'border-box',
            color:'black',
        },
        '&>select':{
            borderRadius:'20px',
            fontSize:'17px',
            width:'100%',
            minWidth:'220px',
            maxWidth:'440px',
            fontFamily:'text',
            backgroundColor:'var(--lightGray)',
            border:'none',
            fontWeight:'bold',
            height:'50px',
            paddingRight:'15px',
            paddingLeft:'20px',
            boxSizing:'border-box',
            color:'black', 

            '&>option':{
                fontFamily:'text',
                fontSize:'15px'
            }
        }
    },
    '&>div.button':{
        justifyContent:'flex-end',
        margin:'0px 20px',
        '&>button':{
            borderRadius:'var(--borderRadius-div)',
            backgroundColor:'var(--lightBlue)',
            color:'var(--blue)',
            fontFamily:'btnText',
            fontSize:'15px',
            height:'40px',
            textAlign:'center',
            paddingTop:'5px',
            boxSizing:'border-box',
            margin:'20px 0px',
            fontWeight:'bold',
            textDecoration: 'none',
            width:'130px',
            textAlign:'center',
            border:'none',
            cursor:'pointer'
        }
    }    
})
export default function Teacher(props){  
    const [Name,setName]=useState()
    const [Code,setCode]=useState()
    const [Lesson,setLesson]=useState()
 
    
    function AddTeachers(){
        {if(Name && Code && Lesson){var data = JSON.stringify({
            name:Name,
            code:Code,
            subject:Lesson

        })

        var config = {
            method: 'post',
            url: 'https://qanda-bot.liara.run/teacher',
            headers: {
            'Content-Type': 'application/json'
            },
            data: data
        }

        axios(config)
            .then(function (response) {
                alert('اطلاعات شما ثبت شد.')
                window.location.reload()
            })
            .catch(function (error) {
            console.log(error)
            })
    }
        else{alert('لطفا همه ی مقادیر را پر کنید.')}  }
    }
    return(
        <Total>
            <Column>
                <Column>
                    <h2>نام معلم</h2>
                    <input placeholder='سالار رضاپور' onChange={(a)=>setName(a.target.value)}></input>
                </Column>
                <Column>
                    <h2>کد معلم</h2>
                    <input placeholder={global.convertNumberFromEtoP(123456)}  onChange={(b)=>setCode(global.convertNumberFromPtoE(b.target.value))}/>
                </Column>
                <Column className='title'>
                    <h2>درس</h2>
                    <select onChange={(e)=>{setLesson(e.target.value)}}>
                        <option value='شیمی'>شیمی</option>
                        <option value='فیزیک'>فیزیک</option>
                        <option value='زیست'>زیست</option>
                        <option value='هندسه پایه و تحلیلی و گسسته'>هندسه پایه و تحلیلی و گسسته</option>
                        <option value='حسابان 1و2(رشته ریاضی)'>حسابان 1و2(رشته ریاضی)</option>
                        <option value='ریاضیات تجربی(پایه یازدهم و دوازدهم)'>ریاضیات تجربی(پایه یازدهم و دوازدهم)</option>
                        <option value='ریاضیات پایه دهم'>ریاضیات پایه دهم</option>
                        <option value='ریاضی متوسطه اول'>ریاضی متوسطه اول</option>
                        <option value='ادبیات و عربی و دروس اختصاصی انسانی'>ادبیات و عربی و دروس اختصاصی انسانی</option>

                    </select>
                </Column>
                <Row className='button'>
                    <button onClick={()=>{AddTeachers()}}>ثبت</button>
                </Row>
            </Column>
        </Total>    
    )
}