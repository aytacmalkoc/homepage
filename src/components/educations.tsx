import { EducationType } from "@/types";
import EducationItem from "./education-item";
import { educations } from "@/data";

export default function Educations() {
  return (
    <div className="vea-experiences vea-experiences-4 sec-spacer">
      <div className="container">
        <div className="sec-heading-4 text-left mb-60">
          <h2 className="sec-title">Educations</h2>
        </div>
        <div className="experience-list">
          {educations.map((education: EducationType) => (
            <EducationItem key={education.id} education={education} />
          ))}
        </div>
      </div>
    </div>
  );
}
