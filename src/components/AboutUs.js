import about from '../assets/about.jpeg';

const AboutUs = () => {
  return (
    <section className='about-us'>
      <div className='desc'>
        <h1>
          We offer a variety of luxurious properties to make your stay
          comfortable and unforgettable.
        </h1>
        <p>
          Each of our homes is carefully curated to provide you with a unique
          experience.
        </p>
        <p>
          Whether you're traveling for business or pleasure, our homes offer a
          peaceful retreat where you can relax and unwind, so come and
          experience the luxury and comfort of our short-term rentals!
        </p>
      </div>
      <div className='photo'>
        <img src={about} alt='desk and chair' />
      </div>
    </section>
  );
};

export default AboutUs;
