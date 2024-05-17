// import { event } from "nextjs-google-analytics";
import { socialMediaLinks } from "@/data";
import { scrollTo } from "@/helpers";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function Hero() {
  // const handleViewResume = () => {
  //   event("click", {
  //     category: "click",
  //     label: "User click the view resume button",
  //   });

  //   openFile("/files/aytacmalkoc-cv.pdf");
  // };

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
                    <socialMedia.icon
                      size={28}
                      style={{
                        display: "inline-block",
                        color: "#120",
                        verticalAlign: "middle",
                        marginTop: 0,
                        marginBottom: 0,
                        marginLeft: 10,
                        marginRight: 10,
                      }}
                    />
                  </a>
                ))}
                {/* <button
                  onClick={handleViewResume}
                  className="social-link btn btn-outline-dark mt-lg-0 mt-3"
                >
                  Download Europass CV
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="scroll-dwn d-none d-lg-flex justify-content-center align-items-center"
        onClick={() => scrollTo("top", window.innerHeight)}
      >
        <AiOutlineArrowDown size={26} />
      </div>
    </div>
  );
}
