import { Fragment, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import AuthModal from '../Auth/AuthModal'
import { motion } from 'framer-motion'
import Dashboard from '../navbar/Dashboard'
import { Profile } from '../navbar/Avatar'
import { TryForFree } from '../navbar/TryForFree'
import { Toggle } from '../navbar/Toggle'
import Create from "../app/Create"
import { Debug } from './Debug'

export default function BoardNav(props) {
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }
  const signUserIn = async () => {
      signIn('google');
  }
  const signUserOut = async () => {
    signOut();
  }
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
return (
  <header className="bg-transparent sticky top-0 z-10">
    <nav className="h-14 mx-auto max-w-full flex items-center justify-between p-6 lg:px-3 border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" aria-label="Global">
      <div className="flex lg:flex-1">
        <Link href="/" className="p-1.5 outline-none font-bold text-black dark:text-white text-lg">
          lunar
        </Link>
      </div>
      <div className="flex lg:hidden gap-3 -m-2.5 items-center">
      <Toggle />
        {
          props.session
          ? 
          <>
          <Profile session={props.session} />
          </>
          : 
          <>
          <TryForFree title={'Log in'}/>
          </>
        }
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-6">
        <a className="text-sm font-bold leading-6 text-white flex gap-3 items-center">
        <Toggle />
          {
            props.session 
            ? <> 
              <Profile session={props.session} />
              </>
            : <> 
              <TryForFree title={'Log in'}/>
              </>
          }
        </a>
      </div>
    </nav>
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="bg-white dark:bg-zinc-950 fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
        <Link href="/" className="-m-1.5 p-1.5 outline-none font-medium italic">
        </Link>
          <button
            type="button"
            className="-m-2.5 rounded-xl p-2.5 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
            <motion.div initial={{opacity: 0,y:-10}} animate={{opacity: 1,y:0}} transition={{duration: 0.5, delay: 0.1}}>
            <Link href="/b/lunar" className="drop-shadow-md -mx-3 rounded-xl px-3 py-2 text-base font-bold leading-7 text-white hover:text-gray-200 flex justify-center items-center gap-2 duration-500">
                Features
              </Link>
              </motion.div>
              <motion.div initial={{opacity: 0,y:-10}} animate={{opacity: 1,y:0}} transition={{duration: 0.5, delay: 0.2}}>
              <Link href="/b/lunar" className="drop-shadow-md -mx-3 rounded-xl px-3 py-2 text-base font-bold leading-7 text-white hover:text-gray-200 flex justify-center items-center gap-2 duration-500">
                Demo
              </Link>
              </motion.div>
              <motion.div initial={{opacity: 0,y:-10}} animate={{opacity: 1,y:0}} transition={{duration: 0.5, delay: 0.3}}>
              <Link href="/pricing" className="drop-shadow-md -mx-3 rounded-xl px-3 py-2 text-base font-bold leading-7 text-white hover:text-gray-200 flex justify-center items-center gap-2 duration-500">
                Pricing
              </Link>
              </motion.div>
            </div>
            <motion.div initial={{opacity: 0,y:-10}} animate={{opacity: 1,y:0}} transition={{duration: 0.5, delay: 0.4}}>
            <div className="py-6 -mt-6 ">
             {
            props.session 
            ? <> 
            <Link href='/app' className='text-black px-6 py-2 bg-white hover:bg-gray-200 duration-300 rounded-md font-bold flex justify-center gap-2'>
            Dashboard
              </Link></>
            : <><Link onClick={signUserIn} href='/' className='text-black px-6 py-2 bg-white hover:bg-gray-200 rounded-md font-bold flex justify-center gap-2 duration-200'>
              Try for free
              </Link></>
            }
            </div>
            </motion.div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </header>
)
}
