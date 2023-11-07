import React from "react";
import { StyleSheet, css } from "aphrodite";
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <React.Fragment>
      <div className={css(loginStyles.appBody)}>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            className={css(loginStyles.inputs)}
            type="email"
            name="email"
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            className={css(loginStyles.inputs)}
            type="password"
            name="password"
          ></input>
          <button>OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}
const loginStyles = StyleSheet.create({
  appBody: {
    padding: "36px 24px",
    "@media(max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  inputs: {
    margin: "0 16px 0 8px",
  },
});

export default Login;
