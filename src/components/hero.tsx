import { socialMediaLinks } from "@/data";
import { openFile, scrollTo } from "@/helpers";

export default function Hero() {
  return (
    <div className="vea-banner vea-banner-2">
      <div className="container">
        <div className="banner-content">
          <h1 className="banner-title wow fadeInLeft">
            <span className="color-title">Aytac Malkoc</span>
            <br />
            Full Stack Developer
          </h1>
          <div className="row">
            <div className="col-12">
              <div className="banner-cont-links wow fadeInUp">
                {socialMediaLinks.map((socialMedia) => (
                  <a
                    href={socialMedia.url}
                    className="social-link"
                    aria-label={socialMedia.label}
                    title={socialMedia.label}
                    target={"_blank"}
                    key={socialMedia.id}
                    rel={"noreferrer"}
                  >
                    <i className={socialMedia.icon}></i>
                  </a>
                ))}
                <button
                  onClick={() => openFile("/files/resume.pdf")}
                  className="social-link btn btn-outline-dark"
                >
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="scroll-dwn d-none d-lg-flex justify-content-center align-items-center"
        onClick={() => scrollTo("top", window.innerHeight)}
      >
        <i className="fa-solid fa-arrow-down fa-2x"></i>
      </div>
    </div>
  );
}
