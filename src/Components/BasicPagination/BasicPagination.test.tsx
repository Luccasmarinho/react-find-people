import { fireEvent, render, screen } from "@testing-library/react";
import BasicPagination from "./BasicPagination";
import "@testing-library/jest-dom";

describe("Pagination Component", () => {
  it("should render pagination", () => {
    render(<BasicPagination page={1} totalPages={2} onChange={() => {}} />);
    expect(screen.getByLabelText("pagination")).toBeInTheDocument();
  });

  it("should change page on click", () => {
    const mockOnChange = jest.fn();
    render(<BasicPagination page={1} totalPages={2} onChange={mockOnChange} />);
    const button = screen.getByRole("button", { name: /2/i });
    fireEvent.click(button);

    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object), 2);
  });
});
