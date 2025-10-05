import {
  Activity,
  CircleDollarSignIcon,
  Cpu,
  DraftingCompass,
  Lock,
  Mail,
  MoveRightIcon,
  PenBoxIcon,
  Sparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";
import PageSection from "../../components/page-section";
import SectionHeading from "../../components/section-heading";
import SectionSubheading from "../../components/section-subheading";

export default function TournamentSection() {
  return (
    <PageSection>
      <div className="py-6 xl:py-8"></div>

      <div className="text-center mb-20">
        <SectionHeading className="mx-auto">
          {/* Fast Tournament Hosting & Entry */}
          Host Tournament Fast. Join Even Faster
        </SectionHeading>
        <SectionSubheading className="mx-auto">
          Everything you need to manage tournaments, societies and supporters
          now pocket-sized.
        </SectionSubheading>
      </div>

      {/* <div className="px-3 pt-3 md:-mx-8">
          <div className="aspect-88/36 mask-b-from-75% mask-b-to-95% relative">
            <Image
              src="/mail-upper.webp"
              className="absolute inset-0 z-10"
              alt="payments illustration dark"
              width={2797}
              height={1137}
            />
            <Image
              src="/mail-back.webp"
              className="hidden dark:block"
              alt="payments illustration dark"
              width={2797}
              height={1137}
            />
            <Image
              src="/mail-back-light.webp"
              className="dark:hidden"
              alt="payments illustration light"
              width={2797}
              height={1137}
            />
          </div>
        </div> */}

      <div className="grid grid-cols-2 gap-x-5 min-[400px]:gap-10 gap-y-8 lg:grid-cols-4 lg:gap-x-14 max-w-xl mx-auto lg:max-w-none">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <PenBoxIcon className="size-4 shrink-0" />
            <h3 className="text-sm lg:text-lg font-semibold">Mobilizing</h3>
          </div>
          <p className="leading-tight text-foreground text-xs xl:text-sm">
            It supports an entire helping developers and innovate.
          </p>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <CircleDollarSignIcon className="size-4 shrink-0" />
            <h3 className="text-sm lg:text-lg font-semibold">Finance</h3>
          </div>
          <p className="leading-tight text-foreground text-xs xl:text-sm">
            It supports an entire helping developers and businesses.
          </p>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <DraftingCompass className="size-4 shrink-0" />
            <h3 className="text-sm lg:text-lg font-semibold">Organizing</h3>
          </div>
          <p className="leading-tight text-foreground text-xs xl:text-sm">
            It supports an helping developers businesses innovate.
          </p>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Activity className="size-4 shrink-0" />
            <h3 className="text-sm lg:text-lg font-semibold">Participating</h3>
          </div>
          <p className="leading-tight text-foreground text-xs xl:text-sm">
            It supports an helping developers businesses innovate.
          </p>
        </div>
      </div>
    </PageSection>
  );
}

{
  /* <ul className="mt-8 divide-y divide-neutral-300 *:flex *:items-center *:gap-3 *:py-3.5">
            <li>
              <Mail className="size-5 shrink-0 self-start mt-1.5" />
              <div>
                Registration{" "}
                <MoveRightIcon className="inline-block size-4 me-4 leading-1" />
                <span className="text-zinc-600">Form, Slot, Fees, Review</span>
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
          </ul> */
}
