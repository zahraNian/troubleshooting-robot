import styled from 'styled-components'
import './App.css';
import Button from './Button.js'

const Column=styled.div({
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  width:'calc(100% - 20px)'
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
    <Column>
      <Row>
        <Button number="۲۴۳" text="دانش آموز" link='https://en.wikipedia.org/wiki/TDD' />
        <Button number="۴۱" text="معلم" />
        <Button number="۷۶۵" text="سوال" />
        <Button number="۹۸۰" text="اعتبار" />
      </Row>
    </Column>
  )
}
