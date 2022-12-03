import React, { useEffect } from "react";

const ScrollComponent = () => {
  // useEffect handle scroll
  useEffect(() => {
    console.log("Effect scroll runs");
    const handleScroll = () => {
      const scrollTop = document.scrollingElement.scrollTop;
      console.log(scrollTop);
    };
    document.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
    //   console.log("Unmounting scroll component");
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return <div>ScrollComponent</div>;
};

export default ScrollComponent;
