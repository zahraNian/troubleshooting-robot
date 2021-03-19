import { Redirect, Route } from "react-router-dom";
import navbar from "navbar";
function checkLogined() {
  let res = localStorage.getItem("isLogin");
  global.token = res !== null && res;
  return res !== null;
}
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => checkLogined() ? ( <> <navbar /> <Component {...props} /></> ) : ( <Redirect to={{ pathname: "/login",state: { from: props.location },}}/>
        )
      }
    />
  );
};

export default ProtectedRoute;