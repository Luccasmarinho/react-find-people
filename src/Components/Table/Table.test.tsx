import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Table from "./Table";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Context } from "../../context/Context";
import { Routes, Route } from "react-router-dom";
import SectionTopUserDetails from "../UserDetails/SectionTopUserDetails/SectionTopUserDetails";

jest.mock("../../service/api.ts", () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue({
    results: [
      {
        name: { first: "John", last: "Doe", title: "Mr" },
        registered: { date: "11/02/2020", age: 5 },
        picture: { large: "https://example.com/john.jpg" },
      },
    ],
  }),
}));

describe("Table component", () => {
  it("should render button and table", async () => {
    const queryCliente = new QueryClient();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Context.Provider
          value={{ valueInputName: "", setValueInputName: () => {} }}
        >
          <QueryClientProvider client={queryCliente}>
            <Table />
          </QueryClientProvider>
        </Context.Provider>
      </MemoryRouter>
    );
    expect(screen.getByLabelText("loading-circular")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByRole("table")).toBeInTheDocument();
      expect(screen.getByText("John")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /View profile/i })
      ).toBeInTheDocument();
    });
  });

  it("should navigate to the component user details", async () => {
    const queryCliente = new QueryClient();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Context.Provider
          value={{ valueInputName: "", setValueInputName: () => {} }}
        >
          <QueryClientProvider client={queryCliente}>
            <Routes>
              <Route path="/" element={<Table />} />
              <Route
                path="/profile/:name"
                element={<SectionTopUserDetails />}
              />
            </Routes>
          </QueryClientProvider>
        </Context.Provider>
      </MemoryRouter>
    );
    const button = await screen.findByRole("button", { name: /View profile/i });
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.getByText(/John\s*Doe/i)).toBeInTheDocument();
    });
  });
});
