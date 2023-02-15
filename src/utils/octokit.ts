import { Octokit } from "octokit";
// @ts-ignore
import getColor from "github-lang-colors";
import { RepositoryType } from "@/types";

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN || "",
});

export const fetchRepositories = async () => {
  let repos: RepositoryType[] = [];

  await octokit.rest.repos
    .listForUser({
      username: "aytacmalkoc",
      sort: "pushed",
      per_page: 8,
      page: 1,
      type: "owner",
      direction: "desc",
    })
    .then((res) => {
      res.data.forEach(async (repo: any) => {
        if (!repo.fork && !repo.archived) {
          repos.push({
            id: repo.id,
            nameWithOwner: repo.full_name,
            url: repo.html_url,
            description: repo.description,
            language: {
              name: repo.language,
              color: getColor(repo.language),
            },
            archived: repo.archived,
            stars: repo.stargazers_count,
            forks: repo.forks,
            license: repo.license,
          });
        }
      });
    });

  return repos;
};
