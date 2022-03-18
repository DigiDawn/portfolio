import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { content } from "./lib/content";
import { sectionComponents } from "./lib/section";
import { useRef } from "react";

function App() {
  const navbarRef = useRef<Record<string, HTMLElement | null>>({});

  return (
    <>
      <Navbar sectionRef={navbarRef} />
      {content.navbar.navlinks.map((name) => {
        const Component = sectionComponents[name];

        return (
          <section
            key={name}
            id={name.toLowerCase()}
            ref={(el) => {
              if (el) {
                navbarRef.current[name.toLowerCase()] = el;
              }
            }}
          >
            <Component />
          </section>
        );
      })}
      <Footer />
    </>
  );
}

export default App;
