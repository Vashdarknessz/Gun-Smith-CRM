import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import Nav from './components/Nav'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>

      <html lang="en">
        <body>
          <Nav />
          
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}