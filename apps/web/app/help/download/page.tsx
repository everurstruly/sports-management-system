import PageHeading from "@/components/page-heading";
import PageSection from "@/components/page-section";

export default function DownloadPage() {
  return (
    <main>
      <PageSection className="py-18 lg:pb-20">
        <PageHeading className="mx-auto text-center">
          How to Download
        </PageHeading>

        <div className="absolute inset-0 -z-1 bg-[repeating-linear-gradient(105deg,#eee_0px_1px,transparent_1px_8px)] dark:bg-[repeating-linear-gradient(105deg,#222_0px_1px,transparent_1px_8px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#555_70%,transparent_110%)]"></div>
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
