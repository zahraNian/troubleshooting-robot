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
        width:'50%',
        textAlign:'right',
    },
    '&>div.second':{
        marginTop:'13px',
        width:'35%',
        textAlign:'right'
    },
    '&>div.third':{
        marginTop:'13px',
        width:'30%',
        textAlign:'right'
    },
    '&>div.fourth':{
        marginTop:'13px',
        width:'50%',
        textAlign:'right'
    },
    '&>div.fifth':{
        marginTop:'13px',
        width:'45%',
        textAlign:'right'
    },
    '&>div.sixth':{
        marginLeft:'20px',
        marginTop:'13px',
        width:'10%',
        textAlign:'right'
    }
})    
export default function StudentsList(){
    return(
        <Container>
            <H1>ربات رفع اشکال بارسا</H1>
            <Row className='Top'><H2>مشخصات دانش آموزان</H2><Search placeholder='جستجو'></Search></Row>
            <Column className='Content'>
                <TitleDiv>
                    <Row>
                        <div className='first'>نام</div>
                        <div className='second'>کد</div>
                        <div className='third'>پایه</div>
                        <div className='fourth'>رشته</div>
                        <div className='fifth'>سوالات</div>
                        <div className='sixth'>اعتبار</div>
                    </Row>
                </TitleDiv>
                <InfoDiv>
                    <Row>
                        <div className='first'>سالار رضاپور</div>
                        <div className='second'>{global.convertNumberFromEtoP(123456)}</div>
                        <div className='third'>دهم</div>
                        <div className='fourth'>رشته</div>
                        <div className='fifth'>{global.convertNumberFromEtoP(18)}</div>
                        <div className='sixth'>{global.convertNumberFromEtoP(160)}</div>
                    </Row>
                </InfoDiv>
                <InfoDiv>
                    <Row>
                        <div className='first'>سالار رضاپور</div>
                        <div className='second'>{global.convertNumberFromEtoP(123456)}</div>
                        <div className='third'>دهم</div>
                        <div className='fourth'>رشته</div>
                        <div className='fifth'>{global.convertNumberFromEtoP(18)}</div>
                        <div className='sixth'>{global.convertNumberFromEtoP(160)}</div>
                    </Row>
                </InfoDiv>
                <InfoDiv>
                    <Row>
                        <div className='first'>سالار رضاپور</div>
                        <div className='second'>{global.convertNumberFromEtoP(123456)}</div>
                        <div className='third'>دهم</div>
                        <div className='fourth'>رشته</div>
                        <div className='fifth'>{global.convertNumberFromEtoP(18)}</div>
                        <div className='sixth'>{global.convertNumberFromEtoP(160)}</div>
                    </Row>
                </InfoDiv>
                <InfoDiv>
                    <Row>
                        <div className='first'>سالار رضاپور</div>
                        <div className='second'>{global.convertNumberFromEtoP(123456)}</div>
                        <div className='third'>دهم</div>
                        <div className='fourth'>رشته</div>
                        <div className='fifth'>{global.convertNumberFromEtoP(18)}</div>
                        <div className='sixth'>{global.convertNumberFromEtoP(160)}</div>
                    </Row>
                </InfoDiv>
            </Column>
        </Container> 
    )
}           