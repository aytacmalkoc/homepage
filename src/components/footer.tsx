import { socialMediaLinks } from "@/data";

export default function Footer() {
  return (
    <footer className="vea-footer footer-2">
      <div className="container">
        <div className="footer-about text-lg-center">
          <h5>
            <a
              href="https://www.github.com/aytacmalkoc/aytacmalkoc.github.io"
              target={"_blank"}
              rel={"noreferrer"}
            >
              Contribute to improving this page{" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </h5>
          <div className="footer-social-links wow fadeInUp">
            {socialMediaLinks.map((socialMedia) => (
              <a
                href={socialMedia.url}
                className="social-link"
                aria-label={socialMedia.label}
                title={socialMedia.label}
                target={"_blank"}
                rel={"noreferrer"}
                key={socialMedia.id}
              >
                <socialMedia.icon size={34} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
