import styled from 'styled-components'
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
    color:'black',
    '&>div.Content':{
        boxShadow:'var(--Shadow)',
        width:'100%',
        maxWidth:'1000px',
        minWidth:'280px',
        backgroundColor:'var(--back)',
        fontFamily:"text",
        fontWeight:'bold'
    },
    '&>div.Top':{
        width:'calc(100% - 20px)',
        maxWidth:'980px',
        minWidth:'280px',
        alignItems:'center',
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
})        
const H1=styled.h1({
    textAlign:'rigth',
    width:'100%',
    maxWidth:'1000px',
    minWidth:'280px',
    marginTop:'80px',
    marginRight:'20px',
    fontFamily:'title'
})
const H2=styled.h2({
  textAlign:'rigth',
  width:'100%',
  maxWidth:'1000px',
  minWidth:'130px',
  fontFamily:'title',
  fontSize:'17px',
  marginRight:'5px',
})
const Search=styled.input({
    width:'40%',
    minWidth:'160px',
    height:'40px',
    backgroundColor:'#d0d0d0',
    borderRadius:'30px',
    paddingRight:'20px',
    boxSizing:'border-box',
    border:'none',
    color:'black',
    fintSize:'290px',
    fontWeight:'bold',
    fontFamily:'Text',
})
const TitleDiv=styled.div({
    backgroundColor:'white',
    width:'calc(100% - 20px)',
    minHeight:'50px',
    margin:'5px',
    borderRadius:'30px',  
    fontSize:'14px',
    backgroundColor:'#c6e2f5',  
    
})
const InfoDiv=styled.div({
    backgroundColor:'white',
    margin:'5px',
    minHeight:'40px',
    width:'calc(100% - 20px)',
    borderRadius:'30px',
    fontSize:'12px',
    paddingBottom:'5px'
})
const Row=styled.div({
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start',
    width:'100%',
})    
const First=styled.div({
        marginRight:'20px',
        marginTop:'13px',
        width:'65%',
        textAlign:'right',
})
const Second=styled.div({
        marginTop:'13px',
        width:'60%',
        textAlign:'right'
})
const Third=styled.div({
        marginTop:'13px',
        width:'83%',
        textAlign:'right'
})
const Fourth=styled.div({
        marginLeft:'20px',
        marginTop:'13px',
        width:'12%',
        textAlign:'right'
})
export default function TeacherList(){
    let arr=[{
        name:'سالار رضاپور',
        code:global.convertNumberFromEtoP('123456'),
        lesson:'ریاضی-دیفرانسیل-گسسته-آمار',
        question:global.convertNumberFromEtoP('18'),
    },
    {
        name:'سالار رضاپور',
        code:global.convertNumberFromEtoP('123456'),
        lesson:'ریاضی-دیفرانسیل-گسسته-آمار',
        question:global.convertNumberFromEtoP('18'),
    },
    {
        name:'سالار رضاپور',
        code:global.convertNumberFromEtoP('123456'),
        lesson:'ریاضی-دیفرانسیل-گسسته-آمار',
        question:global.convertNumberFromEtoP('18'),
    },
    ]
    const TeacherReturner=()=>{return arr.map((item)=>{return(<InfoDiv>
                                                                <Row>  
                                                                    <First>{item.name}</First>
                                                                    <Second>{item.code}</Second> 
                                                                    <Third>{item.lesson}</Third> 
                                                                    <Fourth>{item.question}</Fourth>
                                                                </Row>
                                                            </InfoDiv>)})}
    return(
        <Container>
            <H1>ربات رفع اشکال بارسا</H1>
            <Row className='Top'><H2>لیست معلمان</H2><Search placeholder='جستجو'></Search></Row>
            <Column className='Content'>
                <TitleDiv>
                    <Row>
                        <First>نام</First>
                        <Second>کد</Second>
                        <Third>دروس</Third>
                        <Fourth>سوالات</Fourth>
                    </Row>
                </TitleDiv>
                {TeacherReturner()}
            </Column>
        </Container> 
    )
}           