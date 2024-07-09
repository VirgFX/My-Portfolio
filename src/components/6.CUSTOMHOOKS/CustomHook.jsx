import "./customhooks.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const CustomHook = (refTab = null, refDivs = null) => {
  const activeTab = useSelector((state) => state.activeTab);

  useEffect(() => {
    if (refTab?.current?.classList.contains(activeTab)) {
      refTab.current.scrollIntoView({ behavior: "smooth" });
    }

    if (refDivs?.current) {
      refDivs.current.forEach((div) => {
        if (div) {
          div.classList.add("animation");
        }
      });
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (refDivs?.current) {
        refDivs.current.forEach((div) => {
          if (div) {
            const offsetTop = div.getBoundingClientRect().top + scrollPosition;
            if (scrollPosition >= offsetTop - (window.innerHeight / 4) * 3) {
              div.classList.add("active");
            } else {
              div.classList.remove("active");
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeTab, refTab, refDivs]);

  return null;
};

export default CustomHook;
