import { Outlet } from '@tanstack/react-router'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (<><div className="p-2">Hello from About!</div>

    <Link to="/about/child1" className="[&.active]:font-bold">
      Child 1
    </Link>
    <Link to="/about/child2" className="[&.active]:font-bold">
      Child 2
    </Link>
    <div className="p-2">
      {/* <Outlet /> */}
    </div>
  </>
  )
}
