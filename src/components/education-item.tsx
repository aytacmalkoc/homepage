import { EducationType } from "@/types";
import { openFile } from "@/helpers";

export default function EducationItem({
  education,
}: {
  education: EducationType;
}) {
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
          <div className="experience-details">
            <h4>{education.title}</h4>
            <div className="d-flex align-items-center justify-content-between">
              <p>{education.description}</p>
              {education.file && (
                <button
                  className="btn btn-outline-dark"
                  onClick={() => openFile(education.file?.url)}
                >
                  {education.file.title}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
