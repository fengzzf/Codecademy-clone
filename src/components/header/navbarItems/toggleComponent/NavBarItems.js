/* eslint-disable jsx-a11y/anchor-is-valid */
import userPhoto from "../../../assests/img/images.jpg";

const navBarItems = () => {
  return (
    <div>
      <a href="#">My Home</a>
      <a href="#">Course Catalog</a>
      <a href="#">Resource</a>
      <a href="#">Community</a>
      <a href="#">Plans + Pricing</a>
      <img
        src={userPhoto}
        alt="User"
        className="navbarItems__icon user-photo"
      />
      <button className="navbarItems_btn btn">Try pro for free</button>
    </div>
  );
};

export default navBarItems;
