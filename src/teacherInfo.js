import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  height: "100%",
  backgroundColor: "var(--back)",
  fontFamily: "text",
  direction: "rtl",
  "&>div.Content": {
    borderRadius: "25px",
    boxShadow: "var(--Shadow)",
    width: "calc(100% - 40px)",
  },
});
const Column = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  backgroundColor: "white",
  textAlign: "center",
  "&>div.Large": {
    width: "100%",
    marginTop: "20px",
  },
  "&>div.Total": {
    flexFlow: "row wrap",
    alignItems: "flex-start",
    borderRadius: "25px",
    boxShadow: "var(--shadow)",
    justifyContent: "space-around",
  },
  "&>div.B": {
    justifyContent: "flex-end",
    width: "calc(100% - 20px)",
  },
  "&>div.newLesson": {
    width: "calc(100% - 20px)",
    minWidth: "240px",
    height: "40px",
    marginRight: "20px",
    marginLeft: "10px",
    marginTop: "5px",
    "&>h2": {
      marginRight: "0px",
    },
    "&>button": {
      width: "100px",
      backgroundColor: "white",
      border: "none",
      color: "blue",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: "bold",
    },
  },
});
const Row = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  "&>div.RowBigColumn": {
    padding: "30px 10px 50px 10px",
    boxSizing: "border-box",
    maxWidth: "760px",
    borderRadius: "15px",
  },
});
const LargeInput = styled.input({
  borderRadius: "20px",
  fontSize: "20px",
  width: "calc(100% - 20px)",
  minWidth: "260px",
  fontFamily: "text",
  backgroundColor: "var(--lightGray)",
  border: "none",
  fontWeight: "bold",
  height: "50px",
  paddingRight: "20px",
  boxSizing: "border-box",
  color: "black",
  marginTop: "10px",
});
const Title = styled.h2({
  width: "100%",
  textAlign: "right",
  marginRight: "30px",
  fontSize: "15px",
});
const Button = styled.button({
  borderRadius: "var(--borderRadius-div)",
  backgroundColor: "var(--lightBlue)",
  color: "var(--blue)",
  fontFamily: "btnText",
  fontSize: "15px",
  height: "40px",
  textAlign: "center",
  boxSizing: "border-box",
  margin: "40px 0px -10px 0px",
  fontWeight: "bold",
  textDecoration: "none",
  width: "130px",
  textAlign: "center",
  border: "none",
  cursor: "pointer",
});
const H1 = styled.h1({
  textAlign: "rigth",
  width: "100%",
  marginRight: "55px",
  marginTop: "80px",
  fontFamily: "title",
});
const H2 = styled.h2({
  textAlign: "rigth",
  width: "100%",
  marginRight: "50px",
  fontFamily: "title",
  fontSize: "20px",
});
const Select = styled.select({
  borderRadius: "20px",
  fontSize: "17px",
  width: "calc(100% - 20px)",
  minWidth: "260px",
  fontFamily: "text",
  backgroundColor: "var(--lightGray)",
  border: "none",
  fontWeight: "bold",
  height: "50px",
  paddingRight: "20px",
  boxSizing: "border-box",
  color: "black",
  marginTop: "10px",
  "&>option": {
    fontFamily: "text",
    fontSize: "15px",
    color: "black",
  },
  "&>option.first": {
    fontWeight: "bold",
    color: "black",
    fontSize: "17px",
    backgroundColor: "#c5c5c5",
  },
});

export default function TeacherInfo() {
  const [Name, setName] = useState();
  const [Lesson, setLesson] = useState();
  const [Code, setCode] = useState();
  const [Question, setQuestion] = useState();
  const [isEffected, setIsEffected] = useState(false);
  const [teacherList, setTeacherList] = useState([]);
  const [teacherInfo, setTeacherInfo] = useState([]);
  const { teacherId } = useParams();

  function EditTeachers() {
    var data = JSON.stringify({
      name: Name ? Name : teacherInfo.name,
      code: Code ? Code : teacherInfo.code,
      subject: Lesson ? Lesson : teacherInfo.Lesson,
    });
    var config = {
      method: "post",
      url: `https://qanda-bot.liara.run/edit/${teacherId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        alert("اطلاعات شماویرایش شد.");
        response.error ? alert(response.error) : window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    if (!isEffected) {
      setIsEffected(true);
      axios
        .get(`https://qanda-bot.liara.run/teacher?_id=${teacherId}`)
        .then(response => {
          setTeacherInfo(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  });

  return (
    <Container>
      <H1>ربات رفع اشکال بارسا</H1>
      <H2>مشخصات معلم</H2>
      <Column className="Content">
        <Row className="Total">
          <Column className="RowBigColumn">
            <Column className="Large">
              <Title>نام معلم</Title>
              <LargeInput
                placeholder={teacherInfo.name}
                onChange={a => setName(a.target.value)}
              ></LargeInput>
            </Column>
            <Column className="Large">
              <Title>درس</Title>
              <Select
                onChange={e => {
                  setLesson(e.target.value);
                }}
              >
                <option className="first" value={teacherInfo.subject}>
                  {global.subjects[teacherInfo.subject]}
                </option>

                {global.optionRetuner()}
              </Select>
            </Column>
          </Column>
          <Column className="RowBigColumn">
            <Column className="Large">
              <Title>کد معلم</Title>
              <LargeInput
                placeholder={global.convertNumberFromEtoP(teacherInfo.code)}
                onChange={c => setCode(c.target.value)}
              ></LargeInput>
            </Column>
            <Column className="Large">
              <Title>سوالات</Title>
              <LargeInput
                placeholder={global.convertNumberFromEtoP(18)}
                onChange={d => setQuestion(d.target.value)}
              ></LargeInput>
            </Column>
            <Row className="B">
              <Button
                onClick={() => {
                  EditTeachers();
                }}
              >
                ذخیره
              </Button>
            </Row>
          </Column>
        </Row>
      </Column>
    </Container>
  );
}
