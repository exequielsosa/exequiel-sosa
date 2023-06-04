import { Inter } from 'next/font/google'
import { Button } from 'flowbite-react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
     Initial page
     <div>
      <Button>Click me</Button>
    </div>
    </main>
  )
}
