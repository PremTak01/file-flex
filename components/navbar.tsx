// imports
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Github, Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar({}): any {
  return (
    <nav className="fixed z-50 flex items-center justify-between w-full h-24 px-4 py-10 backdrop-blur-md bg-background bg-opacity-30 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link href="/" className="min-h-screen flex justify-center items-center">
        <Image
          alt="logo"
          className="w-20 cursor-pointer"
          src="/images/logo.png"
          height={100}
          width={170}
        />
        <p className="mt-3 text-3xl font-thin hover:font-extrabold">File Flex</p>
      </Link>
      <div className="hidden gap-1 md:gap-2 lg:gap-4 md:flex">
        <Button variant="ghost" className="font-semibold text-md">
          <Link href="/">Home</Link>
        </Button>
        <Link href="/about">
          <Button variant="ghost" className="font-semibold text-md">
            About
          </Button>
        </Link>
        <Link href="/privacy-policy">
          <Button variant="ghost" className="font-semibold text-md">
            Privacy Policy
          </Button>
        </Link>
      </div>
      <div className="items-center hidden gap-2 md:flex">
        <ThemeToggle />
        <Link target="_blank" href="https://github.com/PremTak01/file-flex">
          <Button
            variant="default"
            className="items-center hidden gap-2 rounded-full w-fit md:flex"
            size="lg"
          >
            <span>Github Repo</span>
            <span className="text-xl">
              <Github />
            </span>
          </Button>
        </Link>
      </div>
      {/* MOBILE NAV */}
      <Sheet>
        <SheetTrigger className="block p-3 md:hidden">
          <span className="text-2xl text-slate-950 dark:text-slate-200">
            <Menu />
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className="flex flex-col w-full h-full">
                <SheetTrigger asChild>
                  <Link href="/">
                    <Button
                      variant="link"
                      className="w-full font-semibold text-md"
                    >
                      Home
                    </Button>
                  </Link>
                </SheetTrigger>
                <SheetTrigger asChild>
                  <Link href="/about">
                    <Button
                      variant="link"
                      className="w-full font-semibold text-md"
                    >
                      About
                    </Button>
                  </Link>
                </SheetTrigger>
                <SheetTrigger asChild>
                  <Link href="/privacy-policy">
                    <Button
                      variant="link"
                      className="w-full font-semibold text-md"
                    >
                      Privacy Policy
                    </Button>
                  </Link>
                </SheetTrigger>
                <ThemeToggle />
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
