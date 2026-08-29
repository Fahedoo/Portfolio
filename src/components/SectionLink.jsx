import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../utils/scrollToSection";

export default function SectionLink({ section, className, children, ...props }) {
  const location = useLocation();
  const navigate = useNavigate();
  const sectionId = section.replace("#", "");

  const handleClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      scrollToSection(section);
      return;
    }

    navigate("/", { state: { scrollTo: sectionId } });
  };

  return (
    <a href={section} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
