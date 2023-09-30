import { useEffect, useState } from "react";

export default function useScreen() {
  const [screen, setScreen] = useState();
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    screenSize();
    window.addEventListener("resize", screenSize);
    return () => {
      window.removeEventListener("resize");
    };
  }, []);

  const screenSize = () => {
    setSize(window.innerWidth);
    if (window.innerWidth > 1000) return setScreen("Large");
    if (window.innerWidth < 1000 && window.innerWidth > 500)
      return setScreen("Medium");
    if (window.innerWidth < 500) return setScreen("Small");
  };

  return [size, screen];
}
