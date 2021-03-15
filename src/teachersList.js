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
    '&>div.first':{
        marginRight:'20px',
        marginTop:'13px',
        width:'65%',
        textAlign:'right',
    },
    '&>div.second':{
        marginTop:'13px',
        width:'60%',
        textAlign:'right'
    },
    '&>div.third':{
        marginTop:'13px',
        width:'83%',
        textAlign:'right'
    },
    '&>div.fourth':{
        marginLeft:'20px',
        marginTop:'13px',
        width:'12%',
        textAlign:'right'
    }
})    
export default function TeacherList(){
    return(
        <Container>
            <H1>ربات رفع اشکال بارسا</H1>
            <Row className='Top'><H2>لیست معلمان</H2><Search placeholder='جستجو'></Search></Row>
            <Column className='Content'>
                <TitleDiv>
                    <Row>
                        <div className='first'>نام</div>
                        <div className='second'>کد</div>
                        <div className='third'>دروس</div>
                        <div className='fourth'>سوالات</div>
                    </Row>
                </TitleDiv>
                <InfoDiv>
                    <Row>
                        <div className='first'>سالار رضاپور</div>
                        <div className='second'>{global.convertNumberFromEtoP(123456)}</div>
                        <div className='third'>ریاضی-دیفرانسیل-گسسته-آمار</div>
                        <div className='fourth'>{global.convertNumberFromEtoP(18)}</div>
                    </Row>
                </InfoDiv>
                <InfoDiv>
                    <Row>
                        <div className='first'>سالار رضاپور</div>
                        <div className='second'>{global.convertNumberFromEtoP(123456)}</div>
                        <div className='third'>علوم-زیست-شیمی</div>
                        <div className='fourth'>{global.convertNumberFromEtoP(18)}</div>
                    </Row>
                </InfoDiv>
                <InfoDiv>
                    <Row>
                        <div className='first'>سالار رضاپور</div>
                        <div className='second'>{global.convertNumberFromEtoP(123456)}</div>
                        <div className='third'>دینی-ادبیات</div>
                        <div className='fourth'>{global.convertNumberFromEtoP(18)}</div>
                    </Row>
                </InfoDiv>
            </Column>
        </Container> 
    )
}           