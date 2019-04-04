//Higher Order Component (HOC) - A Component (HOC) that render another component.
//Reuse code
//Render hijacking
//Prop manipulation
//Abstarct state

import React from "react";
import ReactDom from "react-dom";

const Info = props => {
  return (
    <div>
      <h1>Info.</h1>
      <p>{props.info}</p>
    </div>
  );
};

const withAdminWarning = WrappedCompoent => {
  //This is higher order component i.e (New component)
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedCompoent {...props} />
    </div>
  );
};

const Auth = props => (
  <div>
    <h1>Login</h1>
    <p>Please Login you are not valid user...</p>
  </div>
);
const Welcome = props => (
  <div>
    <h1>Welcome Admin</h1>
    <p> You are valid user</p>
  </div>
);

const requireAuth = WrappedCompoent => {
  return props => (
    <div>{props.isAdmin ? <Welcome /> : <WrappedCompoent />}</div>
  );
};
const AdminInfo = withAdminWarning(Info);
const Authenticate = requireAuth(Auth);

ReactDom.render(
  <Authenticate isAdmin={false} info="Higher Order Components!" />,
  document.getElementById("app")
);
