import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export type SectionName =
  | 'Home'
  | 'About'
  | 'Skills'
  | 'Projects'
  | 'Contact';

export const sectionComponents = {
  Home: Home,
  About: About,
  Skills: Skills,
  Projects: Projects,
  Contact: Contact,
}
