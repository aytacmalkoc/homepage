import { experiences } from "@/data";
import { ExperienceType } from "@/types";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Experience(props: any) {
  const [experience, setExperience] = useState<ExperienceType | undefined>();
  const router = useRouter();

  useEffect(() => {
    setExperience(experiences.find((exp) => exp.slug == router.query.slug));
  }, []);

  return <div>{experience?.company}</div>;
}
