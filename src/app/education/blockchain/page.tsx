import Link from 'next/link'
import Image from 'next/image'
import { Beaker, ArrowRight, Bitcoin, FileCode, Globe, BookOpen } from 'lucide-react'
import { Button } from "@/app/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion"

export default function BlockchainEducationPage() {
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
              <Link href="/education/blockchain">Blockchain</Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6 md:py-12 max-w-5xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">The Ultimate Guide to Blockchain, Bitcoin, and Web3</h1>
              <p className="text-xl text-muted-foreground">
                A comprehensive journey from blockchain basics to cutting-edge decentralized technologies.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Introduction: Reimagining Digital Trust and Ownership</h2>
              <p className="text-muted-foreground">
                In a world increasingly dominated by centralized digital platforms, blockchain technology emerges as a revolutionary approach to how we think about trust, ownership, and digital interactions.
              </p>
            </section>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="blockchain-basics">
                <AccordionTrigger className="text-xl font-semibold">
                  1. What is Blockchain? Breaking Down the Basics
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">The Fundamental Concept</h3>
                    <p>Imagine a digital ledger that is:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Completely transparent</li>
                      <li>Impossible to alter retroactively</li>
                      <li>Distributed across thousands of computers worldwide</li>
                      <li>Secured by advanced cryptography</li>
                    </ul>
                    
                    <Image 
                      src="/placeholder.svg"
                      alt="Blockchain Concept Diagram"
                      width={800}
                      height={400}
                      className="rounded-lg my-6"
                    />

                    <h4 className="font-semibold">Key Characteristics:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Decentralization:</strong> No single point of control</li>
                      <li><strong>Transparency:</strong> All transactions are visible to network participants</li>
                      <li><strong>Immutability:</strong> Once data is recorded, it cannot be changed</li>
                      <li><strong>Security:</strong> Cryptographically secured transactions</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="bitcoin">
                <AccordionTrigger className="text-xl font-semibold">
                  2. Bitcoin: The First Blockchain Revolution
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Origin Story</h3>
                    <p>
                      In 2008, an anonymous person (or group) named Satoshi Nakamoto published a revolutionary whitepaper: 
                      "Bitcoin: A Peer-to-Peer Electronic Cash System"
                    </p>
                    
                    <h4 className="font-semibold">Key Bitcoin Innovations:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>First decentralized cryptocurrency</li>
                      <li>Solved the "double-spending" problem without a central authority</li>
                      <li>Created a scarce digital asset with a fixed supply (21 million coins)</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ecosystem">
                <AccordionTrigger className="text-xl font-semibold">
                  3. Beyond Bitcoin: The Broader Blockchain Ecosystem
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Ethereum and Smart Contracts</h3>
                    <p>
                      While Bitcoin introduced decentralized money, Ethereum revolutionized blockchain by introducing 
                      programmable contracts.
                    </p>
                    
                    <h4 className="font-semibold">What are Smart Contracts?</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Self-executing contracts with terms directly written into code</li>
                      <li>Automatically enforce agreements without intermediaries</li>
                      <li>Run on the Ethereum blockchain</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="web3">
                <AccordionTrigger className="text-xl font-semibold">
                  4. Web3: The Decentralized Internet
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">From Web1 to Web3</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Web1:</strong> Read-only, static websites</li>
                      <li><strong>Web2:</strong> Interactive platforms (social media, cloud services)</li>
                      <li><strong>Web3:</strong> Decentralized, user-owned digital ecosystems</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="defi">
                <AccordionTrigger className="text-xl font-semibold">
                  5. Decentralized Finance (DeFi)
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Reimagining Financial Services</h3>
                    <p>DeFi platforms offer traditional financial services without banks:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Lending</li>
                      <li>Borrowing</li>
                      <li>Trading</li>
                      <li>Insurance</li>
                      <li>Savings accounts</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Glossary of Key Terms</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-lg border">
                  <h3 className="font-semibold">Blockchain</h3>
                  <p className="text-sm text-muted-foreground">Distributed, immutable digital ledger</p>
                </div>
                <div className="p-4 rounded-lg border">
                  <h3 className="font-semibold">Cryptocurrency</h3>
                  <p className="text-sm text-muted-foreground">Digital or virtual currency using blockchain</p>
                </div>
                <div className="p-4 rounded-lg border">
                  <h3 className="font-semibold">Smart Contract</h3>
                  <p className="text-sm text-muted-foreground">Self-executing contract with coded terms</p>
                </div>
                <div className="p-4 rounded-lg border">
                  <h3 className="font-semibold">DApp</h3>
                  <p className="text-sm text-muted-foreground">Decentralized Application running on a blockchain</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Ready to Learn More?</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/services">
                    View Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>
          </div>
        </div>
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