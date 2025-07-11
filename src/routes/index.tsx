import * as fs from 'node:fs'
import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

import { Button } from '@/components/ui/button'

import { ModeToggle } from '@/components/mode-toggle'
import { TopNavbar } from '@/components/top-navbar'
import { ListingGrid } from '@/components/listing-grid'
import { SideBar } from '@/components/sidebar'

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { usersTable } from '../db/schema';

const db = drizzle(process.env.DATABASE_URL!);


const filePath = 'count.txt'

async function readCount() {
  return parseInt(
    await fs.promises.readFile(filePath, 'utf-8').catch(() => '0'),
  )
}

const getCount = createServerFn({
  method: 'GET',
}).handler(() => {
  return readCount()
})

const updateCount = createServerFn({ method: 'POST' })
  .validator((d: number) => d)
  .handler(async ({ data }) => {
    const count = await readCount()
    await fs.promises.writeFile(filePath, `${count + data}`)
  })

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => await getCount(),
})

async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
  };

  await db.insert(usersTable).values(user);
  console.log('New user created!')

  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users)
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */

  await db
    .update(usersTable)
    .set({
      age: 31,
    })
    .where(eq(usersTable.email, user.email));
  console.log('User info updated!')

  await db.delete(usersTable).where(eq(usersTable.email, user.email));
  console.log('User deleted!')
}

main();


function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()

  return (
    <div>
        <SideBar></SideBar>
        <TopNavbar></TopNavbar>
        <ListingGrid></ListingGrid>
        <ModeToggle></ModeToggle>
        <Button
        type="button"
        onClick={() => {
            updateCount({ data: 1 }).then(() => {
              router.invalidate()
            })
        }}
        >
        Add 1 to {state}?
        </Button>
    </div>
  )
}