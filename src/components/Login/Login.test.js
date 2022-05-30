import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./Login";
import AdminColaborator from "../Admin/AdminColaborator";
import { createMemoryHistory } from "history";
import { Router, Routes, Route } from "react-router-dom";

test("Login component", async () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <Login />
    </Router>
  );
  const emaiInput = screen.getByTestId("login-email-input");
  const passwordInput = screen.getByTestId("login-password-input");
  fireEvent.change(emaiInput, { target: { value: "francyPrueba@gmail.com" } });
  fireEvent.change(passwordInput, { target: { value: "123456" } });
  const btnLogin = screen.getByText("Login");
  fireEvent.click(btnLogin);
  // let errMnsj;
  await waitFor(() => {
    const errMnsj = screen.getByText("Cannot find user");
    expect(errMnsj.textContent).toBe("Cannot find user");
  });
  // debug();
});

test.only("Login component", async () => {
  const history = createMemoryHistory();
  const { debug } = render(
    <Router location={history.location} navigator={history}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/AdminColaborator" element={<AdminColaborator />} />
      </Routes>
    </Router>
  );
  const emaiInput = screen.getByTestId("login-email-input");
  const passwordInput = screen.getByTestId("login-password-input");
  fireEvent.change(emaiInput, {
    target: { value: "grace.hopper@systers.xyz" },
  });
  fireEvent.change(passwordInput, { target: { value: "123456" } });
  const btnLogin = screen.getByTestId("login-btn");
  fireEvent(btnLogin, new MouseEvent("click"));

  let windowTwo;
  await waitFor(async () => {
    debug();
    await screen.findByText("Hola! Soy el Administrador!!!!!!!!");
  });
  // debug();
  //   expect(windowTwo.getByTestId("vista-adminfalse")).toBeInTheDocument();
});