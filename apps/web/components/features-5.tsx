import {
  Activity,
  DraftingCompass,
  Mail,
  MoveRightIcon,
  Zap,
} from "lucide-react";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-14 lg:grid-cols-6 lg:gap-24">
          <div className="lg:col-span-3">
            <div className="md:pr-6 lg:pr-0">
              <h2 className="text-5xl lg:text-6xl font-semibold uppercase font-impact text-zinc-900 dark:text-zinc-100">
                Fast Tournament Hosting & Entry
              </h2>
              <p className="mt-2">
                Mobile friendly, quick setup, and easy to manage.
                {/* Everything you need to manage tournaments, clubs, and
                participants in one tap, on the go, with your mobile device. */}
              </p>
            </div>
            <ul className="mt-8 divide-y divide-neutral-300 *:flex *:items-center *:gap-3 *:py-3.5">
              <li>
                <Mail className="size-5 shrink-0 self-start mt-1.5" />
                <div>
                  Registration{" "}
                  <MoveRightIcon className="inline-block size-4 me-4 leading-1" />
                  <span className="text-zinc-600">
                    Form, Slot, Fees, Review
                  </span>
                </div>
              </li>
              <li>
                <Zap className="size-5 shrink-0 self-start mt-1.5" />
                <div>
                  Managing{" "}
                  <MoveRightIcon className="inline-block size-4 me-4 leading-1" />
                  <span className="text-zinc-600">
                    Annoucements, Staffs, Volunteers
                  </span>
                </div>
              </li>
              <li>
                <DraftingCompass className="size-5 shrink-0 self-start mt-1.5" />
                <div>
                  Organizing{" "}
                  <MoveRightIcon className="inline-block size-4 me-4 leading-1" />
                  <span className="text-zinc-600">
                    Calendar, Brackets, Scores, Flyers
                  </span>
                </div>
              </li>
              <li>
                <Activity className="size-5 shrink-0 self-start mt-1.5" />
                <div>
                  Participation{" "}
                  <MoveRightIcon className="inline-block size-4 me-4 leading-1" />
                  <span className="text-zinc-600">
                    Stats, Spectating, Team Chat
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative p-3 border border-border/50 rounded-3xl lg:col-span-3">
            <div className="relative p-px bg-linear-to-b aspect-76/59 rounded-2xl from-zinc-300 to-transparent dark:from-zinc-700">
              <Image
                src="/payments.png"
                className="hidden rounded-[15px] dark:block w-full"
                alt="payments illustration dark"
                width={1207}
                height={929}
              />
              <Image
                src="/payments-light.png"
                className="w-full rounded-[15px] shadow dark:hidden"
                alt="payments illustration light"
                width={1207}
                height={929}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
