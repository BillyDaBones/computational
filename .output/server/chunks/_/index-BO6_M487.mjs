import { jsxs, jsx } from 'react/jsx-runtime';
import { R as Route$1, A as AppSidebar, c as cn } from './ssr.mjs';
import '@tanstack/react-router';
import 'lucide-react';
import 'react';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-dialog';
import '@radix-ui/react-tooltip';
import '@tanstack/history';
import '@tanstack/router-core/ssr/client';
import '@tanstack/router-core';
import '@tanstack/router-core/ssr/server';
import 'node:async_hooks';
import 'tiny-invariant';
import '@tanstack/react-router/ssr/server';

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
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "https://ezraharris.com", children: /* @__PURE__ */ jsx(Card, { className: "w-80 h-[300] overflow-hidden flex", children: /* @__PURE__ */ jsxs(CardHeader, { children: [
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
const ListingGrid = (props) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap w-screen h-full gap-2 p-8", children: [
    /* @__PURE__ */ jsx(GridCard, { title: "1999 Honda Accord", subheading: "San Francisco", miniheading: "600k miles", price: 600, img: { src: props.imageSrc, alt: "a randomly generated prop" } }),
    /* @__PURE__ */ jsx(GridCard, { title: "1999 Honda Accord", subheading: "San Francisco", miniheading: "600k miles", price: 600, img: { src: props.imageSrc, alt: "a randomly generated prop" } })
  ] });
};
const SplitComponent = function Home() {
  Route$1.useLoaderData();
  const img = "https://picsum.photos/200";
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(AppSidebar, {}),
    /* @__PURE__ */ jsx(ListingGrid, { imageSrc: img }),
    /* @__PURE__ */ jsx("p", { children: "test" })
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=index-BO6_M487.mjs.map
