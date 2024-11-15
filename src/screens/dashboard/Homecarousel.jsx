import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MultipleItems from "./component/Carouselcomponent";

const Carouselhome = () => {
  return (
    <>
      <section className="home-carousel-sec-h">
        <div className="home-carousel-title-h">
          <h3>What We Offer</h3>
          <div className="homt-carousel-title-text">
            From plumbing and cleaning to roofing, fencing, HVAC, landscaping,
            handyman services, home remodeling, and water heater repairs, Honest
            Home Hub has you covered.
          </div>
        </div>
        <MultipleItems />
      </section>
    </>
  );
};

export default Carouselhome;
