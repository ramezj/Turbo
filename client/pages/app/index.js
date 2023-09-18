import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout";
import Card from "@/components/app/Card";
import Loading from "@/components/app/Loading";
import { motion } from 'framer-motion'
import Create from "@/components/app/Create";
import Manage from "@/components/app/Manage";
import Documentation from "@/components/app/Documentation";
import Premium from "@/components/app/Premium";
import CreateProject from "@/components/project/CreateProject";

export default function Component() {
  const router = useRouter();
  const { data: session } = useSession({
    required:true,
    onUnauthenticated() {
        router.push('/');
    }
  })
  const [ loading, setLoading ] = useState(false);
  const [ projects, setProjects ] = useState([]);
  const [ premium, setPremium ] = useState(false);
  const [ noProjects, setNoProjects ] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const response = await fetch('/api/app');
      const res = await response.json();
      if(res.ok == false) {
        router.push('/')
      }
      if(res.ok == true) {
        if(res.response.projects.length < 1) {
          setNoProjects(true);
        }
        if(res.response.premium == false) {
          setPremium(false);
        } else if (res.response.premium == true) {
          setPremium(true);
        }
        setProjects(res.response.projects);
        setLoading(false);
      }
    }
    fetchUser();
  }, [])
  return (
    <>
    <Layout>
    <title>Lunar, App</title>
    {loading 
    ?
    <>
    <Loading />
    </>
    :
    <>
    <br />
    <center>
      <div className='sm:w-4/5'>
        <h1 className="text-3xl font-bold">Hello, Welcome to your dashboard 👋🏼</h1>
      </div>
      <br /><br />
      <Create />
    {/* <Premium premium={premium} /> */}
    </center>
    <br /><br />
    <div className='flex flex-wrap gap-8 justify-center w-full'>
      {
        noProjects 
        ? 
        <>
        <center>
          <h1 className="text-xl font-bold">No projects yet, Start by creating a project</h1>
        </center>
        </>
        : 
        <>
        {projects.map((project) => {
        return (
          <motion.div
          initial={{opacity: 0 }}
      animate={{opacity: 1 }}
      exit={{opacity: 0 }}
      transition={{
        duration:1
      }}
          >
          <Card title={project.name} href={`/project/${project.id}`} website={project.website} settings={`/settings/${project.id}`} />
          </motion.div>
        )
      })}
        </>
      }
      </div>
    </>
    }
    </Layout>
    </>
  )
}