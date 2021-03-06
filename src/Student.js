import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const Total = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "15px",
  boxShadow: "var(--shadow)",
  margin: "15px",
  width: "calc(100% - 20px)",
  minWidth: "260px",
  maxWidth: "440px",
  paddingTop: "20px",
  boxSizing: "border-box",
});
const Row = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  "&>div": {
    width: "100%",
    margin: "10px",
    width: "200px",
    "&>h2": {
      color: "var(--subText)",
      fontSize: "15px",
      width: "calc(100% - 10px)",
      textAlign: "right",
    },
    "&>select": {
      borderRadius: "20px",
      fontSize: "20px",
      width: "calc(100% - 10px)",
      minWidth: "95px",
      maxWidth: "180px",
      fontFamily: "text",
      backgroundColor: "var(--lightGray)",
      border: "none",
      fontWeight: "bold",
      height: "50px",
      paddingRight: "15px",
      boxSizing: "border-box",
      color: "black",
      fontSize: "17px",
    },
  },
});
const Column = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  margin: "0px 20px",
  "&>div": {
    borderRadius: "none",
    boxShadow: "none",
    width: "100%",
    height: "110px",
    "&>h2": {
      color: "var(--subText)",
      fontSize: "15px",
      width: "calc(100% - 30px)",
      textAlign: "right",
      minWidth: "200px",
      maxWidth: "400px",
    },
    "&>input": {
      borderRadius: "20px",
      fontSize: "20px",
      width: "calc(100% - 30px)",
      minWidth: "220px",
      maxWidth: "400px",
      fontFamily: "text",
      backgroundColor: "var(--lightGray)",
      border: "none",
      fontWeight: "bold",
      height: "50px",
      paddingRight: "20px",
      boxSizing: "border-box",
      color: "black",
    },
  },
  "&>div.button": {
    justifyContent: "flex-end",
    width: "calc(100% - 30px)",
    minWidth: "220px",
    maxWidth: "420px",
    "&>button": {
      borderRadius: "var(--borderRadius-div)",
      backgroundColor: "var(--lightBlue)",
      color: "var(--blue)",
      fontFamily: "btnText",
      fontSize: "15px",
      height: "40px",
      textAlign: "center",
      paddingTop: "5px",
      boxSizing: "border-box",
      margin: "20px 0px",
      fontWeight: "bold",
      textDecoration: "none",
      width: "130px",
      textAlign: "center",
      border: "none",
      cursor: "pointer",
    },
  },
});
export default function Srudent(props) {
  const [Name, setName] = useState([]);
  const [Code, setCode] = useState([]);
  const [Grade, setGrade] = useState([]);
  const [Majors, setMajors] = useState([]);
  const [Credit, setCredit] = useState([]);

  function AddStudents() {
    {
      if (
        Name.length !== 0 &&
        Code.length !== 0 &&
        Grade.length !== 0 &&
        Majors.length !== 0 &&
        Credit.length !== 0
      ) {
        var data = JSON.stringify({
          name: Name,
          code: Code,
          subject: Grade + " " + Majors,
          qs: Credit,
        });

        var config = {
          method: "post",
          url: "https://qanda-bot.liara.run/student",
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios(config)
          .then(function (response) {
            alert("?????????????? ?????? ?????? ????.");
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        alert("???????? ?????? ?? ???????????? ???? ???? ????????.");
      }
    }
  }
  return (
    <Total>
      <Column>
        <Column>
          <h2>?????? ???????? ????????</h2>
          <input
            placeholder="?????????? ????????????"
            onChange={b => setName(b.target.value)}
          ></input>
        </Column>
        <Column>
          <h2>???? ???????? ????????</h2>
          <input
            placeholder={global.convertNumberFromEtoP(123456)}
            onChange={b =>
              setCode(global.convertNumberFromPtoE(b.target.value))
            }
          ></input>
        </Column>
        <Row>
          <Column>
            <h2>????????</h2>
            <select
              onChange={e => {
                setGrade(e.target.value);
              }}
            >
              <option>???????????? ????????</option>
              <option value="??????????????">??????????????</option>
              <option value="????????????">????????????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="????????">????????</option>
              <option value="????????<">????????</option>
              <option value="??????">??????</option>
              <option value="????????">????????</option>
              <option value="??????????">??????????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
            </select>
          </Column>
          <Column>
            <h2>????????</h2>
            <select
              onChange={e => {
                setMajors(e.target.value);
              }}
            >
              <option>???????????? ????????</option>

              <option value="??????????">??????????</option>
              <option value="??????????">??????????</option>
              <option value="????????????">????????????</option>
              <option value="??????">??????</option>
              <option value="????????">????????</option>
            </select>
          </Column>
        </Row>
        <Column>
          <h2>????????????</h2>
          <input
            placeholder={global.convertNumberFromEtoP(60)}
            onChange={d =>
              setCredit(global.convertNumberFromPtoE(d.target.value))
            }
          ></input>
        </Column>
        <Row className="button">
          <button
            onClick={() => {
              AddStudents();
            }}
          >
            ??????
          </button>
        </Row>
      </Column>
    </Total>
  );
}
