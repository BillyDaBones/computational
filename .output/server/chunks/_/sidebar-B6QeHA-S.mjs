import { jsx, jsxs } from 'react/jsx-runtime';
import { Sun, Moon, ChevronDownIcon } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { clsx } from 'clsx';
import { Link } from '@tanstack/react-router';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function ModeToggle() {
  function toggleTheme() {
    if (document.documentElement.classList.contains("dark") || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  }
  return /* @__PURE__ */ jsx(DropdownMenu, { children: /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "absolute bottom-5 right-5", children: /* @__PURE__ */ jsxs(Button, { onClick: toggleTheme, variant: "outline", size: "icon", children: [
    /* @__PURE__ */ jsx(Sun, { className: "h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" }),
    /* @__PURE__ */ jsx(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" }),
    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle theme" })
  ] }) }) });
}
function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    NavigationMenuPrimitive.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": viewport,
      className: cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      ),
      ...props,
      children: [
        children,
        viewport && /* @__PURE__ */ jsx(NavigationMenuViewport, {})
      ]
    }
  );
}
function NavigationMenuList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.List,
    {
      "data-slot": "navigation-menu-list",
      className: cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.Item,
    {
      "data-slot": "navigation-menu-item",
      className: cn("relative", className),
      ...props
    }
  );
}
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function NavigationMenuTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    NavigationMenuPrimitive.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: cn(navigationMenuTriggerStyle(), "group", className),
      ...props,
      children: [
        children,
        " ",
        /* @__PURE__ */ jsx(
          ChevronDownIcon,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function NavigationMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.Content,
    {
      "data-slot": "navigation-menu-content",
      className: cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuViewport({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ jsx(
        NavigationMenuPrimitive.Viewport,
        {
          "data-slot": "navigation-menu-viewport",
          className: cn(
            "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
            className
          ),
          ...props
        }
      )
    }
  );
}
function NavigationMenuLink({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.Link,
    {
      "data-slot": "navigation-menu-link",
      className: cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
const TopNavbar = () => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(NavigationMenu, { viewport: false, className: "w-[200]", children: /* @__PURE__ */ jsxs(NavigationMenuList, { children: [
    /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsx(NavigationMenuTrigger, { children: "Item One" }),
      /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsx(NavigationMenuLink, { children: "Link" }) })
    ] }),
    /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsx(NavigationMenuTrigger, { children: "Item Two" }),
      /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsxs("ul", { className: "p-8", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavigationMenuLink, { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "rounded-md p-8 [&.active]:bg-red-50  [&.active]:dark:text-black", children: "Home" }) }) }),
        /* @__PURE__ */ jsx("li", { className: "p-8", children: "testing" }),
        /* @__PURE__ */ jsx("li", { className: "p-8", children: "testing" })
      ] }) })
    ] })
  ] }) }) });
};
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-2 ",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
const GridCard = (content) => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "https://ezraharris.com", children: /* @__PURE__ */ jsx(Card, { className: "w-80 h-[200] overflow-hidden flex", children: /* @__PURE__ */ jsxs(CardHeader, { children: [
    /* @__PURE__ */ jsx("img", { src: content.img.src, alt: content.img.alt, className: "object-center w-full object-cover h-50 rounded-md" }),
    /* @__PURE__ */ jsxs("p", { className: "font-bold m-0", children: [
      "$",
      content.price
    ] }),
    /* @__PURE__ */ jsx(CardTitle, { className: "font-normal", children: content.title }),
    /* @__PURE__ */ jsxs(CardDescription, { children: [
      /* @__PURE__ */ jsx("p", { children: content.subheading }),
      /* @__PURE__ */ jsx("p", { children: content.miniheading })
    ] })
  ] }) }) }) });
};
const ListingGrid = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap w-screen h-full gap-2 p-8", children: [
    /* @__PURE__ */ jsx(GridCard, { title: "1999 Honda Accord", subheading: "San Francisco", miniheading: "600k miles", price: 600, img: { src: "https://picsum.photos/200", alt: "a randomly generated prop" } }),
    /* @__PURE__ */ jsx(GridCard, { title: "1999 Honda Accord", subheading: "San Francisco", miniheading: "600k miles", price: 600, img: { src: "https://picsum.photos/300", alt: "a randomly generated prop" } }),
    /* @__PURE__ */ jsx(GridCard, { title: "1999 Honda Accord", subheading: "San Francisco", miniheading: "600k miles", price: 600, img: { src: "https://picsum.photos/500", alt: "a randomly generated prop" } }),
    /* @__PURE__ */ jsx(GridCard, { title: "1999 Honda Accord", subheading: "San Francisco", miniheading: "600k miles", price: 600, img: { src: "https://picsum.photos/230", alt: "a randomly generated prop" } }),
    /* @__PURE__ */ jsx(GridCard, { title: "1999 Honda Accord", subheading: "San Francisco", miniheading: "600k miles", price: 600, img: { src: "https://picsum.photos/200", alt: "a randomly generated prop" } }),
    /* @__PURE__ */ jsx(GridCard, { title: "1999 Honda Accord", subheading: "San Francisco", miniheading: "600k miles", price: 600, img: { src: "https://picsum.photos/300", alt: "a randomly generated prop" } }),
    /* @__PURE__ */ jsx(GridCard, { title: "1999 Honda Accord", subheading: "San Francisco", miniheading: "600k miles", price: 600, img: { src: "https://picsum.photos/500", alt: "a randomly generated prop" } }),
    /* @__PURE__ */ jsx(GridCard, { title: "1999 Honda Accord", subheading: "San Francisco", miniheading: "600k miles", price: 600, img: { src: "https://picsum.photos/230", alt: "a randomly generated prop" } })
  ] });
};
const SideBar = () => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex w-[300px] h-full absolute left-0 bg-gray-700 z-10 flex-wrap", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full flex h-10 p-8", children: /* @__PURE__ */ jsx("img", { width: "100", height: "100", src: "https://cdn.freebiesupply.com/logos/large/2x/random-logo-png-transparent.png", alt: "website logo" }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full relative", children: /* @__PURE__ */ jsx("div", { className: "w-full] p-8 ", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("ul", { className: "w-full", children: [
      /* @__PURE__ */ jsx("li", { className: "p-8", children: "Testing " }),
      /* @__PURE__ */ jsx("li", { children: "Testing two" })
    ] }) }) }) })
  ] }) });
};

export { Button as B, ListingGrid as L, ModeToggle as M, SideBar as S, TopNavbar as T };
//# sourceMappingURL=sidebar-B6QeHA-S.mjs.map
