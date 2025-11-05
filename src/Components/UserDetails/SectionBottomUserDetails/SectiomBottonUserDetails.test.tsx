import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SectionBottomUserDetails from "./SectionBottomUserDetails";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../../service/api.ts", () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue({
    results: [
      {
        name: { first: "John", last: "Doe", title: "Mr" },
        registered: { date: "2000-02-11T00:00:00Z", age: 5 },
        picture: { large: "https://example.com/john.jpg" },
        location: {
          city: "New York",
          country: "USA",
          state: "NY",
          street: { name: "Broadway", number: 123 },
        },
        login: { username: "john_doe" },
      },
    ],
  }),
}));

describe("BottomUserDetails componenet", () => {
  const queryClient = new QueryClient();

  it("should render buttons and change your content with a click.", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/profile/John"]}>
          <SectionBottomUserDetails />
        </MemoryRouter>
      </QueryClientProvider>
    );

    await waitFor(() => {
      const buttonInfo = screen.getByRole("button", { name: /Info/i });
      const buttonLocation = screen.getByRole("button", { name: /Location/i });
      const buttonLogin = screen.getByRole("button", { name: /Login/i });

      expect(buttonInfo).toBeInTheDocument();
      expect(buttonLocation).toBeInTheDocument();
      expect(buttonLogin).toBeInTheDocument();

      fireEvent.click(buttonLocation);
      const textExpectLocation = [
        "City",
        "Country",
        "State",
        "Street",
        "Number",
      ];
      textExpectLocation.forEach((text) =>
        expect(screen.getByText(text)).toBeInTheDocument()
      );

      fireEvent.click(buttonLogin);
      expect(screen.getByText("Username")).toBeInTheDocument();

      fireEvent.click(buttonInfo);
      const textExpectInfo = [
        "First Name",
        "Last Name",
        "Title",
        "Date",
        "Age",
      ];
      textExpectInfo.forEach((text) =>
        expect(screen.getByText(text)).toBeInTheDocument()
      );
    });
  });
});
