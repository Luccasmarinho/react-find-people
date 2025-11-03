import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import SectionTopUserDetails from "./SectionTopUserDetails";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Table from "../../Table/Table";
import { Context } from "../../../context/Context";

jest.mock("../../../service/api.ts", () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue({
    results: [
      {
        name: { first: "Luccas", last: "Marinho", title: "Mr" },
        registered: { date: "2000-05-15T09:26:30.191Z", age: 5 },
        picture: { large: "https://example.com/Luccas.jpg" },
      },
    ],
  }),
}));

const renderTopUserDetails = () => {
  const queryClient = new QueryClient();

  return render(
    <Context.Provider
      value={{ valueInputName: "", setValueInputName: () => {} }}
    >
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/profile/Luccas"]}>
          <Routes>
            <Route path="/profile/:name" element={<SectionTopUserDetails />} />
            <Route path="/" element={<Table />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    </Context.Provider>
  );
};
describe("TopUserDetails componenet", () => {
  it("should render button, image and text", async () => {
    renderTopUserDetails();

    expect(await screen.findByRole("button", { name: /Voltar/i }));
    expect(await screen.findByText(/Luccas\s*Marinho/i));
    expect(await screen.findByText(/Mr/i));
    expect(await screen.findByAltText(/Image user/i));
  });

  it("should navegate to the Table component", async () => {
    renderTopUserDetails();
    
    const buttonBack = await screen.findByRole("button", { name: /Voltar/i });
    fireEvent.click(buttonBack);

    expect(await screen.findByText(/Luccas/i)).toBeInTheDocument();
    expect(await screen.findByText(/Marinho/i)).toBeInTheDocument();
    expect(await screen.findByText(/Mr/i)).toBeInTheDocument();
    expect(await screen.findByText("15/05/2000")).toBeInTheDocument();
    expect(await screen.findByText(5)).toBeInTheDocument();
  });
});
