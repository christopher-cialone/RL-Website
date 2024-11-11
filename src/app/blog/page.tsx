import Link from "next/link";
import { Beaker } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
}

export default function BlogPage() {
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
              Rosalone Labs Blog
            </h1>
            <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
              <BlogPost
                title="The Future of Decentralized Technologies"
                excerpt="Explore how blockchain and other decentralized technologies are shaping the future of various industries."
                date="June 15, 2023"
              />
              <BlogPost
                title="Web Development Trends for 2024"
                excerpt="Discover the emerging trends and technologies that will define web development in the coming year."
                date="June 1, 2023"
              />
              <BlogPost
                title="Maximizing Your Digital Presence: A Guide for Small Businesses"
                excerpt="Learn how to leverage digital marketing strategies to boost your small business's online visibility and reach."
                date="May 20, 2023"
              />
              <BlogPost
                title="The Rise of AI in Tech Consulting"
                excerpt="Understand how artificial intelligence is revolutionizing the tech consulting industry and what it means for businesses."
                date="May 5, 2023"
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

function BlogPost({ title, excerpt, date }: BlogPostProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
      <p className="text-gray-500 dark:text-gray-400">{excerpt}</p>
      <Button variant="link" className="p-0">
        Read more
      </Button>
    </div>
  );
}
