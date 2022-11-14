import { useEffect, useState } from "preact/hooks";

export default function MainHeaderContent() {
  const isDarkMode: boolean = localStorage.getItem("isDarkMode") == "true";
  const [isDarkModeState, setIsDarkModeState] = useState<boolean>(isDarkMode);

  function toggleDarkMode(currentState: boolean): void {
    const htmlElement: HTMLHtmlElement =
      document.getElementsByTagName("html")[0];
    if (currentState) {
      localStorage.setItem("isDarkMode", "true");
      htmlElement.classList.add("dark");
    } else {
      localStorage.removeItem("isDarkMode");
      htmlElement.classList.remove("dark");
    }
  }
  return (
    <>
      <img
        src={isDarkModeState
          ? "/simply-darren-logo-dark.svg"
          : "/simply-darren-logo.svg"}
        alt="Simply Darren Logo"
        class="md:block hidden"
      />
      <img
        src={isDarkModeState
          ? "/simply-darren-icon-dark.svg"
          : "/simply-darren-icon.svg"}
        alt="Simply Darren Logo"
        class="md:hidden block"
      />
      <button
        onClick={() => {
          setIsDarkModeState(!isDarkModeState);
          toggleDarkMode(!isDarkModeState);
        }}
        class="h-full hover:opacity-50 focus:outline-none"
        aria-label="Toggle Dark Mode"
      >
        <img
          src={isDarkModeState ? "/dark-mode-icon.png" : "/light-mode-icon.png"}
          alt="Dark Mode Toggle"
          class="w-auto h-[80%] sm:block hidden"
        />
      </button>
    </>
  );
}
