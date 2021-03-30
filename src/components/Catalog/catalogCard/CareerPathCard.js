/* eslint-disable jsx-a11y/anchor-is-valid */

const CareerPathCard = ({ title, svg }) => {
  return (
    <a href="#" className="catalogCard career__path">
      <p>
        <span className="career__path-difficulty">Pro</span> career path
      </p>
      <h3>{title}</h3>
      <div className="course__level">
        <div className="course__lever--dot dot--fill"></div>
        <div className="course__lever--dot"></div>
        <div className="course__lever--difficulty">Beginner friendly</div>
      </div>
      <img src={svg} alt="" className="career__path--svg" />
      <p className="career__path--job">job essentials</p>
    </a>
  );
};

export default CareerPathCard;
