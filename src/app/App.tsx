import { Button } from '@/shared/ui/button'
import { HomeIcon } from 'lucide-react'

const App = () => {
	return (
		<div className='p-20 flex flex-col'>
			<h1 className='text-2xl text-center mb-2'>Hello, World!</h1>
			<Button>
				<HomeIcon />
				Домой вот
			</Button>
		</div>
	)
}

export default App
