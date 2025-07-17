import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  function toggleTheme() {
      if (
        document.documentElement.classList.contains("dark") ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
      } else {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      }
      console.warn("ran function")
  }
  return (
    <Button onClick={toggleTheme} variant="outline" size="icon" data-testId="dark-mode-button" className="absolute top-0 right-0 m-5">
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}