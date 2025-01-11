import Link from "next/link";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

const Nav = () => {
    return (
        <header>
            <nav className="flex items-center justify-between p-6 lg:px-8 h-20 border border-t-0 border-l-0 border-b-gray-600" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                    Home
                    </a>
                    
                </div>
                <div className="flex lg:flex-1">
                    <Link href="/users">Users</Link>
                </div>
                <div className="flex lg:flex-1">
                    <Link href="/dashboard">Dashboard</Link>
                </div>
                {/* <div className="flex lg:flex-1"> */}
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                {/* </div> */}
                
            </nav>
        </header>
    )
  }


export default Nav