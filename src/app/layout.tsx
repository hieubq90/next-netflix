import '~/assets/styles/global.scss'
import { AuthProvider } from '~/components/providers'

export const metadata = {
  title: 'Netflix',
  description: 'Home - Netflix',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="h-screen w-screen">{children}</div>
        </AuthProvider>
      </body>
    </html>
  )
}
