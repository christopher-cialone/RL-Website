import Link from 'next/link'
import { ArrowRight, Code, Palette, Printer, Globe, BookOpen, Menu, Beaker } from 'lucide-react'

import { Button } from "/src/app/components/ui/button";


export default function Home() {
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
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Innovate with Rosalone Labs
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  We provide cutting-edge technical solutions from web development to decentralized technologies education.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Code className="h-10 w-10" />}
                title="Web Development"
                description="Custom websites and web applications tailored to your needs."
              />
              <ServiceCard
                icon={<Palette className="h-10 w-10" />}
                title="Graphic Design"
                description="Eye-catching designs for your brand and marketing materials."
              />
              <ServiceCard
                icon={<Printer className="h-10 w-10" />}
                title="Vinyl Prints"
                description="High-quality signs and apparel to promote your business."
              />
              <ServiceCard
                icon={<Globe className="h-10 w-10" />}
                title="Website Management"
                description="Ongoing support and maintenance for your web presence."
              />
              <ServiceCard
                icon={<BookOpen className="h-10 w-10" />}
                title="Decentralized Tech Education"
                description="Learn about blockchain and other cutting-edge technologies."
              />
              <ServiceCard
                icon={<Beaker className="h-10 w-10" />}
                title="Tech Consulting"
                description="Expert advice on leveraging technology for your business growth."
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p>&copy; 2024 Rosalone Labs & Rosalone Industries. All rights reserved.</p>
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

function ServiceCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 mb-4">{description}</p>
      <Button variant="outline" size="sm" asChild>
        <Link href={`/services#${title.toLowerCase().replace(/\s+/g, '-')}`}>
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}