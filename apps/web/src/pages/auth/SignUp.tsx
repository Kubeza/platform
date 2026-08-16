import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { useState } from "react";

const providers = [
  {
    name: "Google",
    mark: "G",
    className: "text-[#4285F4]",
  },
  {
    name: "GitHub",
    mark: "GH",
    className: "text-[#18181B]",
  },
  {
    name: "LinkedIn",
    mark: "in",
    className: "text-[#0A66C2]",
  },
];

export default function SignUp(): React.JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#F3F2EE] text-[#18181B]">
      {/* Background */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-40 -top-40 size-[380px] rounded-full bg-[#4F46E5]/[0.07] blur-3xl" />

        <div className="absolute -bottom-40 -left-40 size-[380px] rounded-full bg-[#67E8F9]/[0.07] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(#18181B08 1px, transparent 1px), linear-gradient(90deg, #18181B08 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      {/* Back */}

      <a
        href="/"
        aria-label="Back"
        className="absolute left-5 top-5 z-30 flex size-10 items-center justify-center rounded-full text-[#686861] transition hover:bg-black/[0.05] hover:text-[#18181B]"
      >
        <ArrowLeft className="size-5" />
      </a>

      {/* Main */}

      <div className="relative z-10 flex h-full w-full items-center justify-center p-3 sm:p-4">
        <div className="grid h-[calc(100vh-1.5rem)] max-h-[760px] w-full max-w-5xl overflow-hidden rounded-2xl border border-[#18181B]/[0.08] bg-[#FAF9F6]/95 shadow-[0_25px_80px_rgba(20,20,20,0.08)] backdrop-blur-xl sm:h-[calc(100vh-2rem)] sm:rounded-3xl lg:grid-cols-[0.88fr_1.12fr]">
          {/* Brand panel */}

          <section className="relative hidden overflow-hidden bg-[#18181B] p-8 text-white lg:flex lg:flex-col lg:justify-between xl:p-10">
            <div
              aria-hidden="true"
              className="absolute -left-28 -top-28 size-80 rounded-full bg-[#4F46E5]/20 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-32 -right-20 size-72 rounded-full bg-[#67E8F9]/10 blur-3xl"
            />

            <div className="relative">
              <a
                href="/"
                aria-label="Kubeza home"
                className="inline-flex items-center gap-3"
              >
                <img
                  src="/kubeza-logo-icon.svg"
                  alt=""
                  aria-hidden="true"
                  className="size-9 object-contain"
                />

                <span className="text-xl font-semibold tracking-tight">
                  Kubeza
                </span>
              </a>

              <div className="mt-16 max-w-sm xl:mt-20">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#67E8F9]">
                  Start engineering
                </p>

                <h1 className="mt-4 text-3xl font-semibold leading-[1.04] tracking-[-0.05em] xl:text-4xl">
                  Your first environment is closer than you think.
                </h1>

                <p className="mt-4 text-sm leading-6 text-[#A6A6A1]">
                  Create your Kubeza account and build practical
                  DevOps skills through real engineering problems.
                </p>
              </div>
            </div>

            <div className="relative rounded-xl border border-white/[0.08] bg-white/[0.035] p-4">
              <div className="font-mono text-xs">
                <div className="text-[#777]">
                  $ kubeza init
                </div>

                <div className="mt-3 text-[#67C587]">
                  ✓ workspace created
                </div>

                <div className="text-[#67C587]">
                  ✓ labs available
                </div>

                <div className="text-[#67C587]">
                  ✓ mentor ready
                </div>

                <div className="mt-2 text-[#67E8F9]">
                  ready to engineer_
                </div>
              </div>
            </div>
          </section>

          {/* Form */}

          <section className="flex min-h-0 flex-col justify-center overflow-hidden px-6 py-5 sm:px-9 sm:py-7 lg:px-10 xl:px-12">
            {/* Mobile logo */}

            <div className="mb-5 lg:hidden">
              <a
                href="/"
                aria-label="Kubeza home"
                className="inline-flex items-center gap-2.5"
              >
                <img
                  src="/kubeza-logo-icon.svg"
                  alt=""
                  aria-hidden="true"
                  className="size-8 object-contain"
                />

                <span className="text-lg font-semibold tracking-tight">
                  Kubeza
                </span>
              </a>
            </div>

            <div className="mx-auto w-full max-w-[420px]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4F46E5]">
                  Create your account
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.045em] sm:text-3xl">
                  Join Kubeza
                </h2>

                <p className="mt-2 text-sm leading-5 text-[#686861]">
                  Start building practical engineering experience.
                </p>
              </div>

              {/* Providers */}

              <div className="mt-5 grid grid-cols-3 gap-2">
                {providers.map((provider) => (
                  <button
                    key={provider.name}
                    type="button"
                    aria-label={`Continue with ${provider.name}`}
                    className="flex h-10 items-center justify-center gap-2 rounded-lg border border-[#18181B]/[0.10] bg-white text-sm font-medium text-[#3F3F3A] transition hover:border-[#18181B]/[0.18] hover:bg-[#F8F7F3]"
                  >
                    <span
                      className={`font-bold ${
                        provider.name === "GitHub"
                          ? "text-[10px]"
                          : "text-sm"
                      } ${provider.className}`}
                    >
                      {provider.mark}
                    </span>

                    <span className="hidden xl:inline">
                      {provider.name}
                    </span>
                  </button>
                ))}
              </div>

              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#18181B]/[0.08]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#999]">
                  or email
                </span>

                <div className="h-px flex-1 bg-[#18181B]/[0.08]" />
              </div>

              {/* Form */}

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                }}
                className="space-y-3"
              >
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-[#3F3F3A]">
                    Name
                  </span>

                  <div className="relative">
                    <UserRound className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#999]" />

                    <input
                      type="text"
                      value={name}
                      onChange={(event) =>
                        setName(event.target.value)
                      }
                      placeholder="Your name"
                      autoComplete="name"
                      className="h-10 w-full rounded-lg border border-[#18181B]/[0.11] bg-white pl-10 pr-4 text-sm outline-none transition placeholder:text-[#AAA] focus:border-[#4F46E5]/50 focus:ring-4 focus:ring-[#4F46E5]/[0.07]"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-[#3F3F3A]">
                    Email address
                  </span>

                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#999]" />

                    <input
                      type="email"
                      value={email}
                      onChange={(event) =>
                        setEmail(event.target.value)
                      }
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="h-10 w-full rounded-lg border border-[#18181B]/[0.11] bg-white pl-10 pr-4 text-sm outline-none transition placeholder:text-[#AAA] focus:border-[#4F46E5]/50 focus:ring-4 focus:ring-[#4F46E5]/[0.07]"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-[#3F3F3A]">
                    Password
                  </span>

                  <div className="relative">
                    <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#999]" />

                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      value={password}
                      onChange={(event) =>
                        setPassword(event.target.value)
                      }
                      placeholder="At least 8 characters"
                      autoComplete="new-password"
                      className="h-10 w-full rounded-lg border border-[#18181B]/[0.11] bg-white pl-10 pr-11 text-sm outline-none transition placeholder:text-[#AAA] focus:border-[#4F46E5]/50 focus:ring-4 focus:ring-[#4F46E5]/[0.07]"
                    />

                    <button
                      type="button"
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                      onClick={() =>
                        setShowPassword(
                          (current) => !current,
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999] transition hover:text-[#555550]"
                    >
                      {showPassword ? (
                        <EyeOff className="size-4" />
                      ) : (
                        <Eye className="size-4" />
                      )}
                    </button>
                  </div>
                </label>

                <p className="pt-0.5 text-[11px] leading-4 text-[#888881]">
                  By creating an account, you agree to use Kubeza
                  responsibly and for legitimate engineering
                  practice.
                </p>

                <button
                  type="submit"
                  className="mt-1 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#4F46E5] text-sm font-medium text-white shadow-[0_8px_20px_rgba(79,70,229,0.14)] transition hover:bg-[#4338CA]"
                >
                  Create account
                  <ArrowRight className="size-4" />
                </button>
              </form>

              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#888881]">
                <ShieldCheck className="size-3.5" />
                Your account will be securely protected.
              </div>

              <p className="mt-4 text-center text-sm text-[#686861]">
                Already have an account?{" "}
                <a
                  href="/signin"
                  className="font-medium text-[#4F46E5] hover:text-[#4338CA]"
                >
                  Sign in
                </a>
              </p>

              <a
                href="/"
                className="mt-3 flex items-center justify-center gap-2 text-xs text-[#999] transition hover:text-[#555550]"
              >
                <UserRound className="size-3.5" />
                Return to Kubeza home
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}