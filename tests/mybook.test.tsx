import Home from "@/pages";
import MyBookPage from "@/pages/mybook";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";

describe("Home render properly", () => {

    it("should render home page", () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <MyBookPage />
            </QueryClientProvider>
        );
        expect(screen.getByTestId("mybook-page")).toBeInTheDocument();
    });
});