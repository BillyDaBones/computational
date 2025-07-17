/// <reference types="vite/client" />
import type { ReactNode } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'

import { ModeToggle } from '@/components/core/mode-toggle'

import appCss from "@/styles/app.css?url"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from '@/components/app-sidebar'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
})


function RootComponent() {
  return (
    <RootDocument>
        <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html className='dark'>
      <head>
        <HeadContent />
      </head>
          <body>
            <SidebarProvider>
              <AppSidebar/>
                <main>
                  <SidebarTrigger />
                  {children}
                </main>
              </SidebarProvider>
            <Scripts />
            <ModeToggle></ModeToggle>
          </body>
    </html>
  )
}