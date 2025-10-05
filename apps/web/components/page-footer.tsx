import { config } from "@/app/config";
import { Logo } from "@/components/logo";
import { Github, GithubIcon } from "lucide-react";
import Link from "next/link";

const links = [
  {
    title: "About",
    href: "#",
  },
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Customers",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
];

export default function PageFooter() {
  return (
    <footer className="px-6 py-16 md:py-32">
      <div className="flex flex-col max-w-5xl mx-auto gap-y-12 xl:gap-y-6">
        <section className="flex flex-wrap-reverse justify-between gap-x-20 gap-y-8">
          <Link
            href="/"
            aria-label="go home"
            className="flex mx-auto.. size-fit -mx-1"
          >
            <div className="text-2xl">
              <Logo />
            </div>
            <span className="text-xl font-bold">{config.brandName}</span>
          </Link>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X/Twitter"
              className="block text-muted-foreground hover:text-primary"
            >
              <GithubIcon />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="block text-muted-foreground hover:text-primary"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                ></path>
              </svg>
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="block text-muted-foreground hover:text-primary"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                ></path>
              </svg>
            </Link>
          </div>
        </section>

        <section className="flex flex-wrap-reverse justify-center md:justify-between gap-x-20 gap-y-12 xl:gap-y-6">
          <span className="block text-sm text-center text-muted-foreground">
            {" "}
            © {new Date().getFullYear()} everurstruly, All rights reserved
          </span>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block duration-150 text-muted-foreground hover:text-primary"
              >
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
}
