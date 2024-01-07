import Wishlist from "@/pages/wishlist"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react"

describe("should render wishlist page properly", () => {
    it("should render wishlist page", () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <Wishlist />
            </QueryClientProvider>
        );
        // expect(screen.getByText("test")).toBeInTheDocument()
        // find id "wishlist-page"
        const wishlistPage = screen.getByTestId("wishlist-page")
        // expect wishlist page to be in the document
        expect(wishlistPage).toBeInTheDocument()
    })
})