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
        justifyContent:'flex-end'
    }
  })
  const Row=styled.div({
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        '&>div.Small':{
            maxWidth:'345px',
            marginTop:'20px'
        },
        '&>div.RowBigColumn':{
            padding:'30px 10px 50px 10px',
            maxWidth:'730px',
            borderRadius:'25px'
        }
  })
  const LargeInput=styled.input({
        borderRadius:'20px',
        fontSize:'20px',
        width:'100%',
        minWidth:'300px',
        fontFamily:'text',
        backgroundColor:'var(--lightGray)',
        border:'none',
        fontWeight:'bold',
        height:'50px',
        paddingRight:'20px',
        boxSizing:'border-box',
        color:'var(--gray)'
  })
  const SmallInput=styled.input({
        borderRadius:'20px',
        fontSize:'20px',
        width:'100%',
        minWidth:'140px',
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

export default function StudentInfo(){
    const[Name, setName]=useState()
    const[Grade, setGrade]=useState()
    const[Majors, setMajors]=useState()
    const[Code, setCode]=useState()
    const[Credit, setCredit]=useState()
    const[Question, setQuestion]=useState()
    return(
        <Container>
            <H1>ربات رفع اشکال بارسا</H1>
            <H2>مشخصات دانش آموز</H2>
            <Column className='Content'>
                <Row className="Total">
                    <Column className='RowBigColumn'>
                        <Column className='Large'>
                            <Title>نام دانش آموز</Title>
                            <LargeInput placeholder='سالار رضاپور' onChange={(a)=>setName(a.target.value)}></LargeInput>
                        </Column>
                        <Row>
                            <Column className='Small'>
                                <Title>پایه</Title>
                                <SmallInput placeholder='دهم' onChange={(b)=>setGrade(b.target.value)}></SmallInput>
                            </Column>
                            <Column className='Small'>
                                <Title>رشته</Title>
                                <SmallInput placeholder='تجربی' onChange={(c)=>setMajors(c.target.value)}></SmallInput>
                            </Column>
                        </Row>
                    </Column>
                    <Column className='RowBigColumn'>
                        <Column className='Large'>
                            <Title>کد دانش آموز</Title>
                            <LargeInput placeholder={global.convertNumberFromEtoP(123456)} onChange={(d)=>setCode(d.target.value)}></LargeInput>
                        </Column>
                        <Row>
                            <Column className='Small'>
                                <Title>اعتبار</Title>
                                <SmallInput placeholder={global.convertNumberFromEtoP(160)} onChange={(e)=>setCredit(e.target.value)}></SmallInput>
                            </Column>
                            <Column className='Small'>
                                <Title>سوالات</Title>
                                <SmallInput placeholder={global.convertNumberFromEtoP(18)}onChange={(f)=>setQuestion(f.target.value)}></SmallInput>
                            </Column>
                        </Row>
                        <Row className='B'>
                            <Button>ذخیره</Button>
                        </Row>
                    </Column>
                </Row>
            </Column>
        </Container>
    )
}