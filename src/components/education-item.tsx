import { event } from "nextjs-google-analytics";
import { EducationType } from "@/types";
import { openFile } from "@/helpers";

export default function EducationItem({
  education,
}: {
  education: EducationType;
}) {
  const handleViewFile = (title: string | undefined) => {
    event("click", {
      category: "click",
      label: `User click the ${title} button`,
    });
    openFile(education.file?.url);
  };

  return (
    <div className="single-experience">
      <div className="row align">
        <div className="col-lg-4 col-xl-3 wow fadeInLeft">
          <div className="experience-duration mb-3">
            <h5>{education.duration}</h5>
            <h4 className="text-black-50">{education.type}</h4>
          </div>
        </div>
        <div className="col-lg-8 col-xl-9 wow fadeInUp">
          <div className="experience-details d-flex flex-column flex-lg-row align-items-lg-center justify-content-between">
            <div>
              <h4>{education.title}</h4>
              <p>{education.description}</p>
            </div>
            {education.file && (
              <button
                className="btn btn-outline-dark mt-3 mt-lg-0"
                onClick={() => handleViewFile(education.file?.title)}
              >
                {education.file.title}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
