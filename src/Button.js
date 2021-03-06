import styled from 'styled-components'
const Column=styled.div({
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'white',
  borderRadius:'20px',
  width:'220px',
  margin:'7px',
  boxShadow:'var(--shadow)',
  '&>div.number':{
    fontFamily:'var(--text)',
      fontSize:'35px',
      fontWeight:'bold',
      marginTop:'15px',
  },
  '&>div.text':{
    fontFamily:'var(--text)',
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
      fontFamily:'var(--btnText)',
      fontSize:'15px',
      marginBottom:'10px',
      padding:'10px 25px 10px 25px',
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
        <a  href={props.link} >مشاهده همه</a>
      </Column>
    </div>
  )
}