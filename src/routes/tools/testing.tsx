import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tools/testing')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tools/testing"!</div>
}
