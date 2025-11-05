import { render, screen } from "@testing-library/react";
import Info from "./Info";
import "@testing-library/jest-dom";

describe("Info componenet", () => {
  render(
    <Info
      first="John"
      last="Oliveira"
      title="Mr"
      date="2000-02-11T00:00:00Z"
      age={5}
    />
  );

  it("should render data info", () => {
    const dataInfo = ["John", "Oliveira", "Mr", "10/02/2000", 5];
    dataInfo.forEach((text) =>
      expect(screen.getByText(text)).toBeInTheDocument()
    );
  });
});
