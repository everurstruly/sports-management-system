import PageHeading from "@/components/page-heading";
import PageSection from "@/components/page-section";

export default function DownloadPage() {
  return (
    <main>
      <PageSection className="py-18 lg:pb-20">
        <PageHeading className="mx-auto text-center">
          How to Download
        </PageHeading>
      </PageSection>
      
      <PageSection>
        <p className="text-lg">
          To download the Sports Management System application, please visit our
          official website and navigate to the "Download" section. Follow the
          instructions provided to ensure a smooth installation process.
        </p>
      </PageSection>
    </main>
  );
}
