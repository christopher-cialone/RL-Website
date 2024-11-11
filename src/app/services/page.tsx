import Link from "next/link";
import {
  ArrowRight,
  Code,
  Palette,
  Printer,
  Globe,
  BookOpen,
  Beaker,
} from "lucide-react";

import { Button } from "@/app/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Beaker className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                Rosalone Labs
              </span>
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
              Our Services
            </h1>
            <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
              <ServiceCard
                icon={<Code className="h-12 w-12" />}
                title="Web Development"
                description="At Rosalone Labs, we create custom websites and web applications tailored to your specific needs. Our team uses cutting-edge technologies to deliver responsive, scalable, and user-friendly solutions that drive your business forward."
              />
              <ServiceCard
                icon={<Palette className="h-12 w-12" />}
                title="Graphic Design"
                description="Our graphic design services cover everything from logo creation to full brand identity packages. We craft visually stunning designs that communicate your brand's message effectively and leave a lasting impression on your audience."
              />
              <ServiceCard
                icon={<Printer className="h-12 w-12" />}
                title="Vinyl Prints"
                description="Rosalone Labs offers high-quality vinyl printing for signs and apparel. Whether you need business signage or custom t-shirts for your team, we've got you covered with durable and eye-catching prints that make your brand stand out."
              />
              <ServiceCard
                icon={<Globe className="h-12 w-12" />}
                title="Website Management"
                description="Let Rosalone Labs handle the ongoing maintenance and updates for your website. We ensure your site remains secure, up-to-date, and performing optimally, allowing you to focus on your core business while we take care of your online presence."
              />
              <ServiceCard
                icon={<BookOpen className="h-12 w-12" />}
                title="Decentralized Tech Education"
                description="Stay ahead of the curve with our educational services on decentralized technologies. Rosalone Labs offers workshops and courses on blockchain, cryptocurrencies, and other emerging tech trends, empowering you with knowledge to navigate the future of technology."
              />
              <ServiceCard
                icon={<Beaker className="h-12 w-12" />}
                title="Tech Consulting"
                description="Leverage our expertise to drive your business growth. Rosalone Labs provides strategic tech consulting services, helping you make informed decisions about technology adoption, digital transformation, and innovation strategies tailored to your business needs."
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p>
                &copy; 2024 Rosalone Labs & Rosalone Industries. All rights
                reserved.
              </p>
            </div>
            <nav className="flex items-center space-x-4">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-start space-y-3">
      <div className="bg-primary/10 p-3 rounded-md">{icon}</div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
      <Button variant="link" className="p-0" asChild>
        <Link href="/contact">
          Get started <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
