import { useState } from "react";
import { UserRound } from "lucide-react";
import Button from "../ui/Button";
import { aboutTeam } from "../../data/about";

const socialIcons = {
  facebook: (
    <svg
      className="h-4 w-4 fill-current"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  linkedin: (
    <svg
      className="h-4 w-4 fill-current"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
    </svg>
  ),
  instagram: (
    <svg
      className="h-4 w-4 fill-current"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  twitter: (
    <svg
      className="h-4 w-4 fill-current"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

const AboutTeam = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleTeam = showAll ? aboutTeam : aboutTeam.slice(0, 4);
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      {/* Soft background glow */}
      <div
        className="pointer-events-none absolute bottom-8 right-[5%] h-60 w-100 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Kicker (Top Container) */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm">
            Our Team
          </span>
        </div>

        {/* Heading & Description (Split Container) */}
        <div className="mt-2 grid grid-cols-1 items-start gap-6 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-[1.18]">
              Meet the People
              <br />
              Behind Lumina Living
            </h2>
          </div>
          <div className="flex flex-col items-start md:col-span-5">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Our diverse team of real estate advisors, property analysts, and
              legal specialists is united by a passion for delivering seamless
              living and investment experiences.
            </p>
            <div className="mt-5">
              <Button
                type="button"
                variant="primary"
                size="sm"
                onClick={() => setShowAll((prev) => !prev)}
                className="rounded-full px-6 py-2.5 shadow-sm"
              >
                {showAll ? "Show Less" : "View All"}
              </Button>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {visibleTeam.map((member) => (
            <div key={member.id} className="group flex flex-col">
              {/* Image Frame */}
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl bg-primary/5 transition-transform duration-300 group-hover:-translate-y-1">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-primary/10 via-primary/5 to-muted/40">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-background/70 text-primary/60 shadow-inner backdrop-blur-sm sm:h-28 sm:w-28">
                      <UserRound className="h-12 w-12 sm:h-14 sm:w-14" aria-hidden="true" />
                    </div>
                  </div>
                )}

                {/* Floating Social Arch/Dock */}
                <div className="absolute inset-x-4 bottom-0 flex justify-center">
                  <div className="flex items-center gap-3.5 rounded-t-2xl border-t border-x border-white/80 bg-white/85 px-6 py-3 text-neutral-800 shadow-md backdrop-blur-md transition-all duration-300 dark:border-white/20 dark:bg-zinc-900/50 dark:text-neutral-100">
                    <a
                      href={member.socialLinks?.facebook || "#"}
                      aria-label={`${member.name} on Facebook`}
                      className="transition-colors hover:text-primary"
                    >
                      {socialIcons.facebook}
                    </a>
                    <a
                      href={member.socialLinks?.linkedin || "#"}
                      aria-label={`${member.name} on LinkedIn`}
                      className="transition-colors hover:text-primary"
                    >
                      {socialIcons.linkedin}
                    </a>
                    <a
                      href={member.socialLinks?.instagram || "#"}
                      aria-label={`${member.name} on Instagram`}
                      className="transition-colors hover:text-primary"
                    >
                      {socialIcons.instagram}
                    </a>
                    <a
                      href={member.socialLinks?.twitter || "#"}
                      aria-label={`${member.name} on X`}
                      className="transition-colors hover:text-primary"
                    >
                      {socialIcons.twitter}
                    </a>
                  </div>
                </div>
              </div>

              {/* Member Details */}
              <div className="mt-4">
                <h3 className="text-base font-bold text-foreground sm:text-lg">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
