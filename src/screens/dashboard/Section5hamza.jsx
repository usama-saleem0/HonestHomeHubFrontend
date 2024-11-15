import googleplay from "../../assets/home-google-play.png";
import appstore from "../../assets/home-app-store.png";
import phone from "../../assets/home-app-logo.png";

const Getapphamza = () => {
  return (
    <section className="sec-5-cont-h">
      <div className="container-h">
        <div className="main-get-app-h">
          <div className="sec-5-mob-h">
            <img src={phone} alt="phone" loading="lazy" />
          </div>
          <div className="sec-5-text-link-h">
            <div className="sec-5-title-h">
              <h1>This App is Available for Your Smart Phone.</h1>
            </div>
            <div className="sec-5-text-h">
              <p>
                Discover the convenience of Honest Home Hub, the ultimate
                solution for all your home service needs. Our app connects you
                with trusted professionals for plumbing, cleaning, roofing,
                fencing, HVAC, landscaping, handyman, home remodeling, and water
                heater services. With just a single photo, you can receive three
                quotes, ensuring you get the best price without the hassle.
                Enjoy the peace of mind that comes with our Honest Haley
                Promise: if your service doesn't meet expectations, you'll get
                your money back and a free cleaning. Download the app today and
                make home maintenance a breeze!
              </p>
            </div>
            <div className="sec-5-link-h">
              <div className="sec-5-google-h">
                <a
                  href="https://play.google.com/store/apps/details?id=com.honesthomehubcustomer&pcampaignid=web_share"
                  target="_blank"
                >
                  <img src={googleplay} alt="googleplay" loading="lazy" />{" "}
                </a>
              </div>
              <div className="sec-5-appstore-h">
                <a
                  href="https://apps.apple.com/us/app/honest-home-hub/id6504685713"
                  target="_blank"
                >
                  <img src={appstore} alt="appstore" loading="lazy" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Getapphamza;
