import { describe, it, expect, vi,} from "vitest"
import {render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

import { ModeToggle } from "./mode-toggle"

describe("Dark and light mode toggle", () => {
    it("Appears on page", () => {
        render(<ModeToggle/>)
        const modeToggleButton = screen.getByTestId("dark-mode-button")
        expect(modeToggleButton).toBeInTheDocument()
    })
})