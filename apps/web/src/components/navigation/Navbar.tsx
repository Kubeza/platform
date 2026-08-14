import { ArrowUpRight, Menu } from "lucide-react";

import IconButton from "../ui/button/IconButton";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

const navigationItems = [
  { label: "Platform", href: "#platform" },
  { label: "Labs", href: "#labs" },
  { label: "AI Mentor", href: "#ai-mentor" },
  { label: "Ecosystem", href: "#ecosystem" },
];

export default function Navbar(): React.JSX.Element {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#050816]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-6 sm:px-8 lg:px-12 xl:px-16">
        <a
          href="/"
          aria-label="Kubeza home"
          className="group flex shrink-0 items-center gap-2.5"
        >
          <span className="relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#4F46E5] shadow-lg shadow-[#4F46E5]/20">
            <span className="absolute inset-[1px] rounded-[7px] bg-[#111827]" />
            <span className="relative text-sm font-bold text-[#67E8F9]">
              K
            </span>
          </span>

          <span className="whitespace-nowrap text-lg font-semibold tracking-tight text-white">
            Kubeza
          </span>
        </a>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  className="whitespace-nowrap text-slate-400 hover:bg-white/[0.04] hover:text-white"
                >
                  {item.label}
                </NavigationMenuLink>
              </li>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <a
            href="#labs"
            className="inline-flex h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-xl px-4 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-white/[0.04] hover:text-white"
          >
            Explore Labs
          </a>

          <a
            href="#get-started"
            className="inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#4F46E5] px-4 text-sm font-medium text-white shadow-lg shadow-[#4F46E5]/20 transition-all duration-200 hover:bg-[#4338CA]"
          >
            <span className="inline-flex items-center whitespace-nowrap">
              Get Started
            </span>
            <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
          </a>
        </div>

        <IconButton
          variant="ghost"
          size="sm"
          className="text-slate-300 hover:bg-white/[0.06] hover:text-white md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" aria-hidden="true" />
        </IconButton>
      </div>
    </header>
  );
}