export const metadata = {
  title: 'Authentication - Netflix',
  description: 'Sign in to Netflix',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className="h-screen w-screen">{children}</div>
}
