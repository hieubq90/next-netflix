import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '~/app/api/auth/options'

export default async function Home() {
  // const session = await getServerSession(authOptions)
  // if (!session) {
  //   redirect('/auth')
  // }

  return (
    <div className="text-white">
      <p>Browse Page</p>
    </div>
  )
}
