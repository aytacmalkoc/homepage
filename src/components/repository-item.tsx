import Image from "next/image";
import { contrast } from "@/helpers";
import { RepositoryType } from "@/types";
import { useEffect, useState } from "react";

export default function RepositoryItem({
  repository,
}: {
  repository: RepositoryType;
}) {
  const [hovered, setHovered] = useState(false);
  const [hoveredStyles, setHoveredStyles] = useState({});

  useEffect(() => {
    if (hovered) {
      setHoveredStyles({
        color: repository.language.color,
      });
    } else {
      setHoveredStyles({});
    }
  }, [hovered]);

  return (
    <div className="card" key={repository.id}>
      <div className="card-body p-0">
        <div className="d-flex justify-content-lg-between align-items-start align-items-lg-center p-3 flex-column flex-lg-row">
          <div>
            <a
              href={repository.url}
              target={"_blank"}
              rel={"noreferrer"}
              style={hoveredStyles}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <i className="fa-solid fa-book me-2"></i>
              {repository.nameWithOwner}
            </a>
            <p className="card-text text-muted">
              <em>
                {repository.description
                  ? repository.description
                  : "No description"}
              </em>
            </p>
          </div>
          <div>
            <span
              className="badge p-2"
              style={{
                backgroundColor: repository.language.color,
                color: contrast(repository.language.color),
              }}
            >
              {repository.language.name}
            </span>
          </div>
        </div>
        <div>
          <ul
            className="d-flex flex-row justify-content-around mt-1"
            style={{
              borderWidth: 1,
              borderStyle: "dashed",
              borderColor: "var(--bs-gray-500)",
            }}
          >
            <li>
              <i className="fa-solid fa-star text-warning me-1"></i>
              <span className="ml-2">{repository.stars}</span>
            </li>
            <li>
              <i className="fa-solid fa-code-fork text-secondary me-1"></i>
              <span>{repository.forks}</span>
            </li>
            <li>
              <i className="fa-solid fa-scale-balanced text-secondary me-1"></i>
              <span>{repository.license?.spdx_id}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
