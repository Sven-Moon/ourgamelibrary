import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/child1')({
  component: Child1,
})

function Child1() {
  return (
    <div className="p-2">
      <h3>About Child 1</h3>
    </div>
  )
}
