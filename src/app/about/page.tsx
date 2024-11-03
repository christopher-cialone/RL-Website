import Link from 'next/link'
import { Beaker } from 'lucide-react'
import { Button } from "@/app/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Beaker className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">Rosalone Labs</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/blog">Blog</Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  About Rosalone Labs
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  We're a team of passionate tech experts dedicated to helping businesses thrive in the digital world.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  At Rosalone Labs, our mission is to empower businesses with cutting-edge technology solutions. We believe in harnessing the power of innovation to drive growth and efficiency for our clients, always staying at the forefront of technological advancements.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  With years of experience in web development, design, and emerging technologies, our team brings a wealth of knowledge to every project. We're committed to staying at the forefront of tech trends to deliver the best solutions for our clients, from blockchain to AI and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Our Team</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <TeamMember name="Christopher Cialone" role="Founder & Lead Engineer" />
              <TeamMember name="Jessica Rosario" role="Co-founder & Design Director" />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p>&copy; 2023 Rosalone Labs. All rights reserved.</p>
            </div>
            <nav className="flex items-center space-x-4">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

function TeamMember({ name, role }) {
  return (
    <div className="flex flex-col items-center space-y-2 text-center">
      <div className="w-32 h-32 rounded-full bg-gray-300"></div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-500 dark:text-gray-400">{role}</p>
    </div>
  )
}