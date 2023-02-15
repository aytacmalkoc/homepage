import { RepositoryType } from "@/types";
import RepositoryItem from "./repository-item";

export default function Repositories({
  repositories,
}: {
  repositories: RepositoryType[];
}) {
  return (
    <div
      className="vea-portfolio vea-portfolio-2 sec-spacer scroll-mt-mbl"
      id="portfolio"
    >
      <div className="container">
        <div className="sec-heading-4 text-left mb-60">
          <h2 className="sec-title">Repositories</h2>
        </div>
        <div className="portfolio-works">
          {repositories.map((repo: RepositoryType) => (
            <RepositoryItem key={repo.id} repository={repo} />
          ))}
        </div>
        <div className="col-12 text-center mt-60">
          <a
            href="https://github.com/aytacmalkoc"
            className="btn btn-outline-dark"
            target={"_blank"}
            rel={"noreferrer"}
          >
            see more on github
          </a>
        </div>
      </div>
    </div>
  );
}
