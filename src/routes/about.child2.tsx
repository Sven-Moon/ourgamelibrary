import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/child2')({
  component: Child2,
})

function Child2() {
  return (
    <div className="p-2">
      <h3>About Child 2</h3>
    </div>
  )
}
