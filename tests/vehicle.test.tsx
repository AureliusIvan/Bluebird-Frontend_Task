import { render, screen } from "@testing-library/react";
import ApplicationLogo from "@/components/applicationLogo";
import { describe, it } from "node:test";
import Home from "@/pages/index";
import Footer from "@/components/footer";
import Wishlist from "@/pages/wishlist";
import preview from "jest-preview";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("render All Page correctly", () => {
  it("renders Wishlist without crashing", () => {
    render(
      <QueryClientProvider
        client={new QueryClient()}
      >
        <Wishlist />
      </QueryClientProvider>
    );
    expect(screen.getByText('My Wishlist')).toBeInTheDocument();
  });

  it("renders Footer without crashing", () => {
    render(
      <QueryClientProvider
        client={new QueryClient()}
      >
        <Footer />
      </QueryClientProvider>
    );
    expect(screen.getByText('Bluebird')).toBeInTheDocument();
  });
});