import { PageHeader } from "@/components/page-header";
import FaqSection from "@/components/faq-section";
import HeroSection from "@/app/.sections/hero-section";
import FollowerSection from "@/app/.sections/follower-section";
import TeamSection from "@/app/.sections/team-section";
import TournamentSection from "@/app/.sections/tournament-section";
import VenueSection from "@/app/.sections/venue-section";

// Pocket Sized Sports Management Solution

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TournamentSection />
      <VenueSection />
      <FollowerSection />
      <TeamSection />
      <FaqSection />
    </main>
  );
}
