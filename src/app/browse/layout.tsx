import { Navbar } from '~/components'

export const metadata = {
  title: 'Home - Netflix',
  description: 'Home - Netflix',
}

export default function BrowseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen bg-zinc-500">
      <Navbar />
      <div className="px-0 py-0">{children}</div>
    </div>
  )
}
