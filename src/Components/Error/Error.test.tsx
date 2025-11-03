import { fireEvent, render, screen } from "@testing-library/react";
import Error from "./Error";
import "@testing-library/jest-dom";

describe("Error component", () => {
  it("should render button and message", () => {
    const mockRefetch = jest.fn();
    render(<Error message="Error" refetch={mockRefetch} />);
    
    expect(screen.getByText(/Error:/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Try again/i })
    ).toBeInTheDocument();
  });

  it("should called refetch", () => {
    const mockRefetch = jest.fn();
    render(<Error message="Error" refetch={mockRefetch} />);

    const button = screen.getByRole("button", { name: /Try again/i });
    fireEvent.click(button);
    expect(mockRefetch).toHaveBeenCalledTimes(1);
  });
});
