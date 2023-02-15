import { InferGetStaticPropsType } from "next";
import { fetchRepositories } from "@/utils/octokit";

// components
import Hero from "@/components/hero";
import Repositories from "@/components/repositories";
import Skills from "@/components/skills";
import Educations from "@/components/educations";
import Topbar from "@/components/topbar";
import Experiences from "@/components/experiences";

export async function getStaticProps() {
  const repositories = await fetchRepositories();

  return {
    props: {
      repositories,
    },
  };
}

export default function Home({
  repositories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Topbar />
      <Hero />
      <Repositories repositories={repositories} />
      <Experiences />
      <Educations />
      <Skills />
    </>
  );
}
