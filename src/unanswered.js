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
  width: "calc(100% - 20px)",
  backgroundColor: "white",
  padding: "50px 0px",
  borderRadius: "40px",
  textAlign: "center",
  boxShadow: "var(--shadow)",
});

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
          <div>
            <span>{global.subjects[subject.name]}:</span>
            <span> {global.convertNumberFromEtoP(subject.count)} سوال</span>
          </div>
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
