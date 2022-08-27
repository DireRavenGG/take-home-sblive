import { useCallback, useRef } from "react";

type UseObserverProps = {
  allPages?: number;
  currPage: number;
  nextPage: () => void;
};

const useObserver = ({ allPages, currPage, nextPage }: UseObserverProps) => {
  const observer: any = useRef();

  const lastElement = useCallback((node: any) => {
    if (allPages && currPage >= allPages) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        nextPage();
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  return lastElement;
};

export default useObserver;
