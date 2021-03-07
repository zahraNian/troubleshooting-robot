import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Total=styled.div({
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:'15px',
    boxShadow:'var(--shadow)',
    margin:'15px',
    width:'100%',
    minWidth:'260px',
    maxWidth:'443px',
    padding:'0px 5px 0px 5px',
    boxSizing:'border-box'
})
const Row=styled.div({
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:'100%',
        '&>div':{
            width:'100%',
            '&>h2':{
                color:'var(--subText)',
                fontSize:'15px',
                width:'100%',
                textAlign:'right',
                marginRight:'50px'
            },
            '&>input':{
                borderRadius:'20px',
                fontSize:'20px',
                width:'70%',
                minWidth:'70px',
                margin:'0px -15px 0px -15px',
                fontFamily:'var(--text)',
                backgroundColor:'var(--lightGray)',
                border:'none',
                fontWeight:'bold',
                padding:'13px 25px 13px 25px',
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
    margin:'20px',
    '&>div':{
        borderRadius:'none',
        boxShadow:'none',
        width:'100%',
        '&>h2':{
            color:'var(--subText)',
            fontSize:'15px',
            width:'100%',
            textAlign:'right',
            marginRight:'50px'

        },
        '&>input':{
            borderRadius:'20px',
            fontSize:'20px',
            width:'80%',
            minWidth:'200px',
            maxWidth:'430px',
            fontFamily:'var(--text)',
            backgroundColor:'var(--lightGray)',
            border:'none',
            fontWeight:'bold',
            padding:'15px 20px 15px 20px',
            color:'var(--gray)'
        }
    },
    '&>div.button':{
        justifyContent:'flex-end',
        marginLeft:'30px',
        '&>a':{
            borderRadius:'var(--borderRadius-div)',
            backgroundColor:'var(--lightBlue)',
            color:'var(--blue)',
            fontFamily:'var(--btnText)',
            fontSize:'15px',
            padding:'13px 25px 13px 25px',
            boxSizing:'border-box',
            margin:'20px 5px 20px 5px',
            fontWeight:'bold',
            textDecoration: 'none',
            width:'130px',
            textAlign:'center'
        }
    }    
})
export default function Srudent(props){   
    return(
        <Total>
            <Column>
                <Column>
                    <h2>نام دانش آموز</h2>
                    <input value={props.name}></input>
                </Column>
                <Column>
                    <h2>کد دانش آموز</h2>
                    <input value={props.code}></input>
                </Column>
                <Row>
                    <Column>
                        <h2>پایه</h2>
                        <input value={props.grade}></input>
                    </Column>
                    <Column>
                        <h2>رشته</h2>
                        <input value={props.majors}></input>
                    </Column>
                </Row>
                <Column>
                    <h2>اعتبار</h2>
                    <input value={props.credit}></input>
                </Column>
                <Row className='button'>
                <Link to={props.link}>ثبت</Link>
                </Row>
            </Column>
        </Total>
    )
}