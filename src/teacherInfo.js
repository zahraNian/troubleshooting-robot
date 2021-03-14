import styled from 'styled-components'
import {useState} from 'react'
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
        width:'calc(100% - 40px)',
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
        width:'100%',
        marginTop:'20px'
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
        '&>div.RowBigColumn':{
            padding:'30px 10px 50px 10px',
            maxWidth:'730px',
            borderRadius:'25px'
        }
  })
  const LargeInput=styled.input({
        borderRadius:'20px',
        fontSize:'20px',
        width:'calc(100% - 20px)',
        minWidth:'280px',
        fontFamily:'text',
        backgroundColor:'var(--lightGray)',
        border:'none',
        fontWeight:'bold',
        height:'50px',
        paddingRight:'20px',
        boxSizing:'border-box',
        color:'var(--gray)'
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

export default function TeacherInfo(){
    const[Name, setName]=useState()
    const[Lesson, setLesson]=useState()
    const[Code, setCode]=useState()
    const[Question, setQuestion]=useState()
    return(
        <Container>
            <H1>ربات رفع اشکال بارسا</H1>
            <H2>مشخصات معلم</H2>
            <Column className='Content'>
                <Row className="Total">
                    <Column className='RowBigColumn'>
                        <Column className='Large'>
                            <Title>نام معلم</Title>
                            <LargeInput placeholder='سالار رضاپور' onChange={(a)=>setName(a.target.value)}></LargeInput>
                        </Column>
                        <Column className='Large'>
                            <Title>دروس</Title>
                            <LargeInput placeholder='عربی' onChange={(b)=>setLesson(b.target.value)}></LargeInput>
                        </Column>
                    </Column>
                    <Column className='RowBigColumn'>
                        <Column className='Large'>
                            <Title>کد معلم</Title>
                            <LargeInput placeholder={global.convertNumberFromEtoP(123456)} onChange={(c)=>setCode(c.target.value)}></LargeInput>
                        </Column>
                        <Column className='Large'>
                            <Title>سوالات</Title>
                            <LargeInput placeholder={global.convertNumberFromEtoP(18)} onChange={(d)=>setQuestion(d.target.value)}></LargeInput>
                        </Column>
                        <Row className='B'>
                            <Button>ذخیره</Button>
                        </Row>
                    </Column>
                </Row>
            </Column>
        </Container>
    )
}