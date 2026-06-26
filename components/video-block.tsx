const IMG = "/images";
const VIDEO = "/videos";

function StarIcon() {
  return (
    <div className="icon-star w-embed">
      <svg
        fill="none"
        height="100%"
        viewBox="0 0 16 16"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.69824 5.26074C9.84349 5.5561 10.1255 5.76082 10.4512 5.80859L14.2598 6.36719L11.502 9.06348C11.2674 9.293 11.1606 9.62275 11.2158 9.94629L11.8652 13.752L8.46387 11.957C8.17179 11.8029 7.82233 11.8029 7.53027 11.957L4.12891 13.752L4.7793 9.94629C4.8345 9.62285 4.72764 9.29298 4.49316 9.06348L1.73535 6.36719L5.54395 5.80859C5.86948 5.76081 6.15062 5.55594 6.2959 5.26074L7.99707 1.80078L9.69824 5.26074Z"
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/**
 * Faithful port of the original Hopeward contact testimonial section
 * (`section.testimonial-video-section`, `evermind-system-testimonial`) from
 * `hopeward-26/contact.html`. The source video files are not present in
 * `public/videos`, so the available background video is reused for the
 * effect.
 */
export function VideoBlock() {
  return (
    <section
      className="section testimonial-video-section"
      data-section-id="evermind-system-testimonial"
      data-section-name="evermind-system-testimonial"
    >
      <div
        className="video-testimonial w-background-video w-background-video-atom"
        data-autoplay="true"
        data-loop="true"
        data-poster-url={`${VIDEO}/outputcompress-video-onlinecom-1-poster-00001.jpg`}
        data-video-urls={`${VIDEO}/outputcompress-video-onlinecom-1-transcode.mp4,${VIDEO}/outputcompress-video-onlinecom-1-transcode.webm`}
        data-wf-ignore="true"
      >
        <video
          autoPlay
          data-object-fit="cover"
          data-wf-ignore="true"
          loop
          muted
          playsInline
          poster={`${VIDEO}/outputcompress-video-onlinecom-1-poster-00001.jpg`}
        >
          <source
            data-wf-ignore="true"
            src={`${VIDEO}/outputcompress-video-onlinecom-1-transcode.mp4`}
          />
          <source
            data-wf-ignore="true"
            src={`${VIDEO}/outputcompress-video-onlinecom-1-transcode.webm`}
          />
        </video>
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="master-content-video">
            <div className="w-layout-grid video-halves">
              <div className="eyebrow w-variant-d0c116b2-ccca-6779-50e7-85c81eef344c">
                <div className="eyebrow-circle" />
                <div
                  className="label-small"
                  data-id="evermind-system-testimonial-eyebrow"
                >
                  EVERMIND SYSTEM
                </div>
              </div>
              <h3
                className="no-margins"
                data-id="evermind-system-testimonial-title"
              >
                Like sustainable architecture, Evermind™ is created to feel
                solid yet effortless. It&apos;s a Webflow template infused with
                eco-inspired design principles, ready to adapt to your story and
                scale beautifully with your business.
              </h3>
            </div>
            <div className="contact-testimonial dark-48">
              <div className="testimonial-rating">
                <StarIcon />
                <div className="text-small">4.9</div>
              </div>
              <div>
                Evermind helped us from construction blueprints to digital
                templates
              </div>
              <div className="testimonial-author">
                <div className="text-wrap-author">
                  <div className="text-small">— Malwina Juice</div>
                  <div className="text-small text-light-64">
                    Founder of FRANCO®
                  </div>
                </div>
                <div className="author-avatar">
                  <img
                    alt=""
                    className="image-cover"
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.9921875px, 939.9921875px"
                    src={`${IMG}/Author_1.webp`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gradient-dark-64" />
      </div>
    </section>
  );
}
