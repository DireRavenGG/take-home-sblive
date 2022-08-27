import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    function handleScroll(): void {
      setScrollPosition(window.scrollY);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return (): void => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty array ensures that effect is only run on mount

  return scrollPosition;
};

export default useScrollPosition;
