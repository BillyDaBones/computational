import * as fs from 'node:fs'
import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

import { Button } from '@/components/ui/button'

import { ModeToggle } from '@/components/mode-toggle'
import { ListingGrid } from '@/components/listing-grid'
import { AppSidebar } from '@/components/app-sidebar'



export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => {
    return {
      message: "test",
    }
  },
})
function Home() {
  const data = Route.useLoaderData()
  const img = "https://picsum.photos/200"

  return (
    <div>
        <AppSidebar></AppSidebar>
        <ListingGrid imageSrc={img}></ListingGrid>
        <p>test</p>
    </div>
  )
}