import Navbar from "@/components/navbar";
import Wishlist from "@/pages/wishlist"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react"

describe("should render search page properly", () => {
    it("should render search page", () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <Navbar />
            </QueryClientProvider>
        );
        // expect(screen.getByText("test")).toBeInTheDocument()
        // find id "wishlist-page"
        const navbar = screen.getByTestId("navbar")
        // expect wishlist page to be in the document
        expect(navbar).toBeInTheDocument()
    })

    // debug search bar
    it("should render search bar", async () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <Navbar />
            </QueryClientProvider>
        );
        // expect(screen.getByText("test")).toBeInTheDocument()
        // find id "wishlist-page"
        const searchbar = screen.getByTestId("search-input")
        // expect wishlist page to be in the document
        expect(searchbar).toBeInTheDocument()
        const resultPage = screen.getByTestId("search-result")
        // expect to style is not in the document
        expect(resultPage).toBeInTheDocument()
        // expect(screen.getByTestId("search-result-item")).toBeUndefined()
    })
})