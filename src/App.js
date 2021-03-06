import styled from 'styled-components'
import './App.css';
import Button from './Button.js'
import Charge from './Charge.js'

const Column=styled.div({
  display:'flex',
  flexDirection:'column',
  justifyContent:'flex-start',
  alignItems:'center',
  width:'90%',
  minWidth:'260px',
})
const Row=styled.div({
  display:'flex',
  flexFlow:'row wrap',
  justifyContent:'center',
  alignItems:'center',
  direction:'rtl'
})

export default function App(){
  return(
    <Column id='root'>
      <Row>
        <Button number="۲۴۳" text="دانش آموز" link='https://en.wikipedia.org/wiki/TDD' />
        <Button number="۴۱" text="معلم" />
        <Button number="۷۶۵" text="سوال" />
        <Button number="۹۸۰" text="اعتبار" />
      </Row>
      <Charge/>
    </Column>
  )
}
