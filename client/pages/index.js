import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "@/components/layout"
import Widget from "@/components/widget"
import { BlitzFeedback } from "blitzpackagev2"
import Features from "@/components/Features"

export default function Component() {
  const { data: session } = useSession()
  return (
    <Layout>
      <center>
            <h1 className='sm:text-5xl 2xl:mt-8 text-4xl w-4/5 font-bold tracking-tight leading-none text-white md:text-6xl lg:text-7xl lg:w-3/6'>
            The next generation of collecting feedback
            </h1>
            <br />
            <p className='text-gray-200 lg:text-xl lg:w-2/6'>An easily embeddable, light-weight feedback widget package that is used to collect user feedback from anywhere.</p>
          <br />
          <br />
            <Widget projectId={'cll5z60fq0001usysevupa81n'} />
            </center>
            {/* <div className='flex lg:flex-row md:flex-row flex-col sm:w-full '>
              <div className='bg-red-500 w-3/6 h-screen'>
              <h1 className="text-white text-3xl font-bold justify-center align-middle flex">BlitzFeedback v1.0</h1>
              </div>
              <div className='bg-indigo-500 w-3/6 h-full min-h-screen'>
              <p>Hello Indigo</p>
              </div>
            </div> */}
    </Layout>
  )
}