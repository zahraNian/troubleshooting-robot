import styled from 'styled-components'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
const Container=styled.div({
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'100%',
    height:'100%',
    backgroundColor:'var(--back)',
    fontFamily:'text',
    direction:'rtl',
    '&>div.Content':{
        borderRadius:'25px',
        boxShadow:'var(--Shadow)',
        width:'calc(100% - 40px)'
    }
})
const Column=styled.div({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    backgroundColor:'white',
    textAlign:'center',
    '&>div.Large':{
        width:'100%'
    },
    '&>div.Total':{
        flexFlow:'row wrap',
        alignItems:'flex-start',
        borderRadius:'25px',
        boxShadow:'var(--shadow)',
        justifyContent:'space-around',
        
    },
    '&>div.B':{
        justifyContent:'flex-end',
        width:'calc(100% - 20px)'
    }
  })
  const Row=styled.div({
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        '&>div.Small':{
            maxWidth:'355px',
            marginTop:'20px'
        },
        '&>div.RowBigColumn':{
            padding:'30px 10px 50px 10px',
            boxSizing:'border-box',
            maxWidth:'760px',
            borderRadius:'15px'
        }
  })
  const LargeInput=styled.input({
        borderRadius:'20px',
        fontSize:'20px',
        width:'calc(100% - 20px)',
        minWidth:'260px',
        fontFamily:'text',
        backgroundColor:'var(--lightGray)',
        border:'none',
        fontWeight:'bold',
        height:'50px',
        paddingRight:'20px',
        boxSizing:'border-box',
        color:'black'
  })
  const SmallInput=styled.input({
    borderRadius:'20px',
    fontSize:'20px',
    width:'calc(100% - 20px)',
    minWidth:'130px',
    fontFamily:'text',
    backgroundColor:'var(--lightGray)',
    border:'none',
    fontWeight:'bold',
    height:'50px',
    paddingRight:'20px',
    boxSizing:'border-box',
    color:'black'
  })  
  const SmallSelect=styled.select({
        borderRadius:'20px',
        fontSize:'20px',
        width:'calc(100% - 20px)',
        minWidth:'130px',
        fontFamily:'text',
        backgroundColor:'var(--lightGray)',
        border:'none',
        fontWeight:'bold',
        height:'50px',
        paddingRight:'20px',
        boxSizing:'border-box',
        color:'black',
        '&>option':{
            fontFamily:'text',
            fontSize:'15px',
            color:'black'
        },
        '&>option.first':{
            fontWeight:'bold',
            color:'black',
            fontSize:'17px',
            backgroundColor:'#c5c5c5'
    
        }
  })
  const Title=styled.h2({
      width:'100%',
      textAlign:'right',
      marginRight:'40px',
      fontSize:'15px',
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
    border:'none',
    cursor:'pointer'
  })
  const H1=styled.h1({
      textAlign:'rigth',
      width:'100%',
      marginRight:'55px',
      marginTop:'80px',
      fontFamily:'title'
  })
  const H2=styled.h2({
    textAlign:'rigth',
    width:'100%',
    marginRight:'50px',
    fontFamily:'title',
    fontSize:'20px',
})


export default function StudentInfo(){
    const[Name, setName]=useState()
    const[Grade, setGrade]=useState()
    const[Majors, setMajors]=useState()
    const[Code, setCode]=useState()
    const[Credit, setCredit]=useState()
    const[Question, setQuestion]=useState()
    const[isEffected, setIsEffected]=useState(false)
    const {studentId}=useParams()
    const[studentInfo, setStudentInfo]=useState([])

    function EditStudent(){
        if(Grade && Majors){var data = JSON.stringify({
            name:Name? Name:studentInfo.name,
            code:Code? Code:studentInfo.code,
            subject:Grade+' '+Majors,
        })
        var config = {
            method: 'post',
            url: `https://qanda-bot.liara.run/edit/${studentId}`,
            headers: {
            'Content-Type': 'application/json'
            },
            data: data
        }
        axios(config)
            .then(function (response) {
                alert('?????????????? ?????? ???????????? ????.')
                response.error?alert(response. error):window.location.reload()
            })
            .catch(function (error) {
            console.log(error)
            })}
            else alert('???????? ???????? ?? ???????? ???? ???????? ????????????.')
    }

    useEffect(()=>{if(!isEffected)
        {setIsEffected(true)
        axios.get(`https://qanda-bot.liara.run/student?_id=${studentId}`)
        .then((response)=>{
            setStudentInfo(response.data)})    
    }})
    
    return(
        <Container>
            <H1>???????? ?????? ?????????? ??????????</H1>
            <H2>???????????? ???????? ????????</H2>
            <Column className='Content'>
                <Row className="Total">
                    <Column className='RowBigColumn'>
                        <Column className='Large'>
                            <Title>?????? ???????? ????????</Title>
                            <LargeInput placeholder={studentInfo.name} onChange={(a)=>setName(a.target.value)}></LargeInput>
                        </Column>
                        <Row>
                            <Column className='Small'>
                                <Title>????????</Title>
                                <SmallSelect onChange={(e)=>{setGrade(e.target.value)}}>
                                    <option className='first' value={studentInfo.subject ? studentInfo.subject.split(' ')[0] : null}>{studentInfo.subject ? studentInfo.subject.split(' ')[0] : null}</option>
                                    <option value='??????????????'>??????????????</option>
                                    <option value='????????????'>????????????</option>
                                    <option value='??????'>??????</option>
                                    <option value='??????'>??????</option>
                                    <option value='????????'>????????</option>
                                    <option value='????????<'>????????</option>
                                    <option value='??????'>??????</option>
                                    <option value='????????'>????????</option>
                                    <option value='??????????'>??????????</option>
                                    <option value='??????'>??????</option>
                                    <option value='??????'>??????</option>
                                    <option value='??????'>??????</option>
                                </SmallSelect>
                            </Column>
                            <Column className='Small'>
                                <Title>????????</Title>
                                <SmallSelect onChange={(c)=>setMajors(c.target.value)}>
                                <option className='first' value={studentInfo.subject ? studentInfo.subject.split(' ')[1] : null}>{studentInfo.subject ? studentInfo.subject.split(' ')[1] : null}</option>
                                    <option value='??????????'>??????????</option>
                                    <option value='??????????'>??????????</option>
                                    <option value='????????????'>????????????</option>
                                    <option value='??????'>??????</option>
                                    <option value='????????'>????????</option>
                                </SmallSelect>    
                            </Column>
                        </Row>
                    </Column>
                    <Column className='RowBigColumn'>
                        <Column className='Large'>
                            <Title>???? ???????? ????????</Title>
                            <LargeInput placeholder={global.convertNumberFromEtoP(studentInfo.code)} onChange={(d)=>setCode(d.target.value)}></LargeInput>
                        </Column>
                        <Row>
                            <Column className='Small'>
                                <Title>????????????</Title>
                                <SmallInput placeholder={global.convertNumberFromEtoP(160)} onChange={(e)=>setCredit(e.target.value)}></SmallInput>
                            </Column>
                            <Column className='Small'>
                                <Title>????????????</Title>
                                <SmallInput placeholder={global.convertNumberFromEtoP(studentInfo.qs)}onChange={(f)=>setQuestion(f.target.value)}></SmallInput>
                            </Column>
                        </Row>
                        <Row className='B'>
                            <Button onClick={()=>{EditStudent()}}>??????????</Button>
                        </Row>
                    </Column>
                </Row>
            </Column>
        </Container>
    )
}