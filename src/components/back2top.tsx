import { useEffect, useState } from "react";
import { scrollTo } from "@/helpers";
import { AiOutlineArrowUp } from "react-icons/ai";

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
      <AiOutlineArrowUp size={26} style={{ display: "inline-block" }} />
    </div>
  );
}
