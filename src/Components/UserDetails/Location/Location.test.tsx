import { render, screen } from "@testing-library/react";
import Location from "./Location";
import "@testing-library/jest-dom";

describe("Location componenet", () => {
  render(
    <Location
      city="Villeurbanne"
      country="France"
      state="Gironde"
      name="Rue des Chartreux"
      number={4181}
    />
  );

  it("should render data location", () => {
    const dataLocation = [
      "Villeurbanne",
      "France",
      "Gironde",
      "Rue des Chartreux",
      4181,
    ];
    dataLocation.forEach((text) =>
      expect(screen.getByText(text)).toBeInTheDocument()
    );
  });
});
