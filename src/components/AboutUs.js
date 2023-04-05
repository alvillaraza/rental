import about from '../assets/about Large.jpeg';

const AboutUs = () => {
  return (
    <section className='about-us black-bg'>
      <div className='desc'>
        <p className='intro'>
          We offer a variety of luxurious properties to make your stay
          comfortable and unforgettable.
        </p>
        <p>
          Each of our homes is carefully curated to provide you with a unique
          experience.
        </p>
        <p>
          Whether you're traveling for business or pleasure, our homes offer a
          peaceful retreat where you can relax and unwind, so come and
          experience luxury and comfort on your stays!
        </p>
      </div>
      <div className='photo'>
        <img src={about} alt='desk and chair' />
      </div>
    </section>
  );
};

export default AboutUs;
