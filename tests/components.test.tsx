import { queryByAttribute, render, screen } from "@testing-library/react";
import ApplicationLogo from "@/components/applicationLogo";
// import { describe, it } from "node:test";
import Wishlist from "@/pages/wishlist";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MyBookPage from "@/pages/mybook";
import Home from "@/pages";
import Alert from "@/components/alert";
import { Header } from "@/components/header";

describe("all components working", () => {

  it("should render application logo", () => {
    render(<ApplicationLogo />);
    expect(screen.getByAltText("Bluebird Group Logo")).toBeInTheDocument();
  });

  it("should render alert properly", () => {
    render(<Alert
      text="alert testing"
    >
      Test Alert
    </Alert>
    );
    const button = screen.getByText("Test Alert");
    button.click();
    // wait for the alert to appear (400ms)
    setTimeout(() => {
      expect(screen.getByText("alert testing")).toBeInTheDocument();
    }, 400);
  });

  it("should render header", () => {
    const queryClient = new QueryClient();
    render(
      <Header
        title="test title"
        description="test description"
      />
    );
    // expect(screen.getByText("Wishlist")).toBeInTheDocument();
    expect(screen.getByText("test title")).toBeInTheDocument();
    expect(screen.getByText("test description")).toBeInTheDocument();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});

