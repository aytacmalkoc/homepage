import { useEffect, useState } from "react";
import { scrollTo } from "@/helpers";

export default function Back2Top() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <div
      id="toTop"
      onClick={() => scrollTo("top", 0)}
      style={{
        display: isVisible ? "block" : "none",
      }}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </div>
  );
}
