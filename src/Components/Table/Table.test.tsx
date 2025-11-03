import { render, screen } from "@testing-library/react";
import Table from "./Table";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Context } from "../../context/Context";

jest.mock("../../service/api.ts", () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue({
    results: [
      {
        name: { first: "John", last: "Doe", title: "Mr" },
        registered: { date: "11/02/2020", age: 5 },
      },
    ],
  }),
}));

describe("Table component", () => {
  const queryCliente = new QueryClient();
  it("should render button and table", async () => {
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
    expect(await screen.findByRole("table")).toBeInTheDocument();
    expect;
    expect(
      screen.getByRole("button", { name: /View profile/i })
    ).toBeInTheDocument();
  });
});
