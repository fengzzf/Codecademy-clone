import React, { useRef } from "react";
import UpArrow from "../../../assests/svg/up-arrow.svg";
import DownArrow from "../../../assests/svg/down-arrow.svg";

const Accordion = ({ Links, title }) => {
  const arrowIcon = useRef(null);
  const accordionBtn = useRef(null);

  const closeAccordion = () => {
    const isVisible = accordionBtn.current.style.display !== "none";
    if (isVisible) {
      accordionBtn.current.style.display = "none";
      arrowIcon.current.src = DownArrow;
    } else {
      accordionBtn.current.style.display = "flex";
      arrowIcon.current.src = UpArrow;
    }
  };

  return (
    <>
      <button className="accordion" onClick={closeAccordion}>
        <span>{title}</span>{" "}
        <img
          src={DownArrow}
          alt="arrwo icon"
          className="arrow-icon"
          ref={arrowIcon}
        />
      </button>
      <div className="panel" ref={accordionBtn}>
        {Links.map((link, index) => (
          <a href="#" key={index}>
            {link}
          </a>
        ))}
      </div>
    </>
  );
};

export default Accordion;
