import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./login.js";
import Page from "./page.js";
import StudentInfo from "./studentInfo.js";
import TeacherInfo from "./teacherInfo.js";
import Unanswered from "./unanswered";
import TeachersList from "./teachersList.js";
import StudentsList from "./studentsList.js";
import ProtectedRoute from "./protectedRoute.js";

export default function App() {
  global.subjects = {
    chem: "شیمی",
    phys: "فیزیک",
    bio: "زیست",
    math1: "هندسه پایه و تحلیلی و گسسته",
    math2: "حسابان 1و2(رشته ریاضی)",
    math3: "ریاضیات تجربی(پایه یازدهم و دوازدهم)",
    math4: "ریاضیات پایه دهم",
    math5: "ریاضی متوسطه اول",
    lit: "ادبیات و عربی و دروس اختصاصی انسانی",
  };
  global.optionRetuner = () => {
    let _optionsArr = [];
    for (const [key, value] of Object.entries(global.subjects)) {
      _optionsArr.push(<option value={key}>{value}</option>);
    }
    return _optionsArr;
  };
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <ProtectedRoute path="/studentsList" component={StudentsList} />
        <ProtectedRoute path="/teacherList" component={TeachersList} />
        <ProtectedRoute path="/unanswered" component={Unanswered} />
        <ProtectedRoute
          path="/teacherInfo/:teacherId"
          component={TeacherInfo}
        />
        <ProtectedRoute
          path="/studentInfo/:studentId"
          component={StudentInfo}
        />
        <ProtectedRoute exact path="/" component={Page} />
      </Switch>
    </Router>
  );
}
