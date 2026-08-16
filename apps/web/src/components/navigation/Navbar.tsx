import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navigationItems = [
  { label: "Platform", href: "/platform" },
  { label: "Labs", href: "/labs" },
  { label: "AI Mentor", href: "/ai-mentor" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export default function Navbar(): React.JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#18181B]/[0.08] bg-[#F3F2EE]/95 text-[#18181B] backdrop-blur-md">
      <div className="mx-auto flex h-[68px] w-full max-w-screen-2xl items-center justify-between px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Logo */}

        <a
          href="/"
          aria-label="Kubeza home"
          className="group flex shrink-0 items-center gap-2.5"
        >
          <img
            src="/kubeza-logo-icon.svg"
            alt=""
            aria-hidden="true"
            className="size-8 object-contain transition-transform duration-200 group-hover:scale-[1.04]"
          />

          <span className="text-[18px] font-semibold tracking-tight">
            Kubeza
          </span>
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden md:flex">
          <ul className="flex items-center gap-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex h-9 items-center rounded-lg px-3.5 text-sm text-[#686861] transition-colors duration-200 hover:bg-black/[0.04] hover:text-[#18181B]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="/signin"
            className="inline-flex h-9 items-center justify-center rounded-lg px-3.5 text-sm font-medium text-[#555550] transition-colors duration-200 hover:bg-black/[0.04] hover:text-[#18181B]"
          >
            Sign in
          </a>

          <a
            href="/signup"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-[#4F46E5] px-4 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#4338CA] hover:shadow-md"
          >
            Get Started

            <ArrowUpRight
              className="size-4"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}

        <button
          type="button"
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((current) => !current)}
          className="flex size-9 items-center justify-center rounded-lg text-[#555550] transition-colors duration-200 hover:bg-black/[0.04] hover:text-[#18181B] md:hidden"
        >
          {mobileOpen ? (
            <X
              className="size-5"
              aria-hidden="true"
            />
          ) : (
            <Menu
              className="size-5"
              aria-hidden="true"
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}

      {mobileOpen && (
        <div className="border-t border-[#18181B]/[0.08] bg-[#F3F2EE] px-6 py-4 md:hidden">
          <nav>
            <ul className="space-y-1">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex h-11 items-center rounded-lg px-3 text-sm text-[#555550] transition-colors duration-200 hover:bg-black/[0.04] hover:text-[#18181B]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-[#18181B]/[0.08] pt-3">
            <a
              href="/signin"
              onClick={() => setMobileOpen(false)}
              className="flex h-10 items-center justify-center rounded-lg border border-[#18181B]/[0.10] text-sm font-medium text-[#3F3F3A] transition-colors hover:bg-white"
            >
              Sign in
            </a>

            <a
              href="/signup"
              onClick={() => setMobileOpen(false)}
              className="flex h-10 items-center justify-center rounded-lg bg-[#4F46E5] text-sm font-medium text-white transition-colors hover:bg-[#4338CA]"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}