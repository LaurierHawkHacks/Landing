import { render, screen } from "@testing-library/react";
import { Button } from "@components";
import userEvent from "@testing-library/user-event";

describe("Button Component", () => {
    it("should render a button", () => {
        render(<Button />);

        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should call given fn on click", async () => {
        const mockFn = vi.fn();
        const user = userEvent.setup();
        render(<Button onClick={mockFn} />);

        const btn = screen.getByRole("button");
        await user.click(btn);

        expect(mockFn).toHaveBeenCalled();
    });

    it("should not call given fn on click if disabled", async () => {
        const mockFn = vi.fn();
        const user = userEvent.setup();
        render(<Button disabled onClick={mockFn} />);

        const btn = screen.getByRole("button");
        await user.click(btn);

        expect(mockFn).not.toHaveBeenCalled();
    });
});
