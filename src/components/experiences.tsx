// import Link from "next/link";
import { experiences } from "@/data";

export default function Experiences() {
  return (
    <div className="vea-experiences vea-experiences-4 sec-spacer">
      <div className="container">
        <div className="sec-heading-4 text-left mb-60">
          <h2 className="sec-title">Experiences</h2>
        </div>
        <div className="experience-list">
          {experiences.map((experience) => (
            <div className="single-experience" key={experience.id}>
              <div className="row">
                <div className="col-lg-4 col-xl-3 wow fadeInLeft">
                  <div className="experience-duration">
                    {experience.logo ?
                      <img src={experience.logo} alt={`${experience.company}'s logo`} width={'50%'} /> :
                      <h1 className="fs-3">{experience.company}</h1>
                    }
                    <h4 className="text-black-50 fs-5">
                      {experience.duration}
                    </h4>
                  </div>
                </div>
                <div className="col-lg-8 col-xl-9 wow fadeInUp">
                  <div className="experience-details">
                    <h4>{experience.title}</h4>
                    <p>{experience.description}</p>
                    {/* <Link
                      href={`experiences/${encodeURIComponent(
                        experience.slug
                      )}`}
                      className="read-more text-decoration-underline"
                    >
                      Read more
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
