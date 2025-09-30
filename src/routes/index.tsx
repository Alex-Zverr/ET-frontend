import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/')({
    component: () => <h3 className="p-2">Welcome Home!</h3>,
})
