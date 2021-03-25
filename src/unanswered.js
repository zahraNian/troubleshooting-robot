import styled from 'styled-components'
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
    return(
        <Container>
            <Column>
            fgsfgfgf
            </Column>
        </Container>
    )
    
}