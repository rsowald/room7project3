// import * as React from react';
// import * as ReactDOM from ;'react-dom';
// import React, { useRef } from "react";
// import GoogleLogin form 'react-google-login';
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
// import { Form, Button, Card } from "react-bootstrap";
import app from "./Base.js";
import { AuthContext } from "./Auth.js";
import { GoogleAuthProvider } from "firebase/auth";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />
  }

    return (
        <div>
            <h3>Sign Up</h3>
            <form onSubmit={handleLogin}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="name@example.com" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );

  // function Login() {
  //   const emailRef = useRef();
  //   const passwordRef = useRef();

//   return(
//         <Card>
//             <Card.Body>
//                 <h3 className="text-center mb-4">Login</h3>
//                 <Form onSumbmit={handleLogin}>
//                     <Form.Group id="email">
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control type="email" ref={emailRef} placeholder="Email" required />
//                         <Form.Group id="password" />
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="email" ref={passwordRef} placeholder="Password" required />
//                     </Form.Group>
//                     <button type="submit">Login</button>
//                 </Form>
//             </Card.Body>
//         </Card>
//     )
// };
}
export default withRouter(Login);
