import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("each <a> element has a unique key prop", () => {
  const errorSpy = jest.spyOn(global.console, "error");

  render(<NavBar />);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});

test("renders three <a> elements", () => {
  
});

test("displays the correct text for each <a> element", () => {
  render(<NavBar />);
  expect(screen.queryByText(/home/i)).toBeInTheDocument();
  expect(screen.queryByText(/about/i)).toBeInTheDocument();
  expect(screen.queryByText(/projects/i)).toBeInTheDocument();
});

test("each <a> element has the correct href attribute", () => {
  render(<NavBar />);
})
