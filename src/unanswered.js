import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  backgroundColor: "var(--back)",
  fontFamily: "text",
});
const Column = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "calc(100% - 40px)",
  minWidth:'260px',
  maxWidth:'600px',
  backgroundColor: "white",
  padding: "50px 0px",
  borderRadius: "40px",
  textAlign: "center",
  boxShadow: "var(--shadow)",
  border:'2px solid var(--lightBlue)',
  fontFamily:'title',
  lineHeight:'3'
});
const Lesson= styled.div({
fontWeight:'bold',
width:'calc(100% - 2px)',
color:'var(--gray)',
fontSize:'17px',
backgroundColor:'var(--lightBlue)',
"&>span.right":{
  width:'100%',
  textAlign:'right',
  fontSize:'15px',
}
})

export default function Unanswered() {
  const [effected, setIsEffected] = useState(false);
  const [info, setInfo] = useState();

  useEffect(() => {
    if (!effected) {
      setIsEffected(true);
      axios
        .get(`https://qanda-bot.liara.run/`)
        .then(response => {
          setInfo(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  });
  const renderSpan = () => {
    if (info) {
      return info.unanswered.map(subject => {
        return (
          <Lesson>
            <span className='right'>{global.subjects[subject.name]}:</span>
            <span className='left'> {global.convertNumberFromEtoP(subject.count)} سوال</span>
          </Lesson>
        );
      });
    }
  };
  return (
    <Container>
      <Column>{renderSpan()}</Column>
    </Container>
  );
}
