import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Column=styled.div({
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'white',
  borderRadius:'20px',
  width:'215px',
  margin:'10px',
  boxShadow:'var(--shadow)',
  fontFamily:'title',
  '&>div.number':{
    fontFamily:'var(--text)',
      fontSize:'35px',
      fontWeight:'bold',
      marginTop:'15px',
  },
  '&>div.text':{
    fontFamily:'text',
    fontSize:'20px',
    fontWeight:'bold',
    marginBottom:'20px',
    marginTop:'10px',
    color:'var(--subText)'
  },
  '&>a':{
      borderRadius:'var(--borderRadius-div)',
      backgroundColor:'var(--lightBlue)',
      color:'var(--blue)',
      fontFamily:'btnText',
      fontSize:'15px',
      width:'150px',
      height:'40px',
      textAlign:'center',
      paddingTop:'10px',
      boxSizing:'border-box',
      marginBottom:'15px',
      fontWeight:'bold',
      textDecoration: 'none'
  }
})

export default function Button(props){
  return(
    <div>
      <Column>
        <div className='number'>{props.number}</div>
        <div className='text'>{props.text}</div>
        <Link to={props.link}>مشاهده همه</Link>
      </Column>
    </div>
  )
}