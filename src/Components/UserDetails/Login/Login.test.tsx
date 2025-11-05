import { render, screen } from "@testing-library/react";
import Login from "./Login";
import "@testing-library/jest-dom";

describe("Login componenet", () => {
  render(<Login username="beautifulmouse426" />);

  it("should render data login", () => {
    expect(screen.getByText("beautifulmouse426")).toBeInTheDocument();
  });
});
