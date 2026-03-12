import Container from "@/components/ui/Container";

export const AboutVideo = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-8 items-center ">
          <div>
            <h2 className="header3 text-center lg:text-left">About Video</h2>
          </div>

          {/* Video Container */}
          <div className="w-full max-w-[640px] aspect-video">
            <video
              controls
              preload="metadata"
              className="w-full h-full rounded-xl shadow-lg object-cover"
              poster="/images/video-poster.jpg"
            >
              <source src="/triage-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
};
