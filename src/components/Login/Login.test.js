import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  getByText,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./Login";
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
  await waitFor(async () => {
    const errMnsj = await screen.getByText("Cannot find user");
    expect(errMnsj.textContent).toBe("Cannot find user");
  });
});
