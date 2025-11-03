import { fireEvent, render, screen } from "@testing-library/react";
import InputSearch from "./InputSearch";
import "@testing-library/jest-dom";
import { Context } from "../../context/Context";

describe("InputSearch component", () => {
  render(<InputSearch />);
  it("should render input search", () => {
    expect(screen.getByText(/Find People/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Search people.../i)
    ).toBeInTheDocument();
  });

  it("should change input search", () => {
    const mockSetValueInput = jest.fn();
    const mockContextValue = {
      valueInputName: "",
      setValueInputName: mockSetValueInput,
    };
    render(
      <Context.Provider value={mockContextValue}>
        <InputSearch />
      </Context.Provider>
    );
    const input = screen.getByPlaceholderText(/Search people.../i);
    fireEvent.change(input, { target: { value: "Ana" } });

    expect(mockSetValueInput).toHaveBeenCalledWith("Ana");
  });
});
