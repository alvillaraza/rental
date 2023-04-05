import bedroom from '../assets/bedroom.jpeg';
const Tours = () => {
  return (
    <section className='partner'>
      <h1 className='intro'>Partner With Us</h1>
      <div className='partner-desc'>
        <div className='partner-content'>
          <div className='partner-blurb'>
            <p>
              We specialize in managing short-term rentals on Airbnb, and we're
              committed to providing you with a stress-free and profitable
              partnership. Our Airbnb arbitrage business model is unique in that
              we take on the risk of managing your property and guarantee you a
              fixed rental income each month, regardless of occupancy. This
              means that you can sit back, relax and enjoy a steady stream of
              passive income.
            </p>
            <p>
              It's also about having peace of mind knowing that your property is
              in good hands. We will take care of everything, from listing your
              property, managing bookings, and guest communication, to cleaning
              and maintenance. We use a rigorous screening process to ensure
              that only the best guests stay in your property, and we take care
              of all the details to ensure that it is well-maintained, safe, and
              compliant with all rules and regulations.
            </p>
            <p>
              ```Suite Dreams``` is available via text or phone call to
              answer any questions, concerns, or accommodations. So if you want
              a stress-free and profitable way to turn your home into a source
              of passive income, partner with us today!
            </p>
          </div>
          <button className='partner-button button-black'>
            Partner With Us
          </button>
        </div>
      </div>
      <div className='faq-photo-section'>
        <img src={bedroom} alt='bedroom' />
        <div className='faq-wrapper'>
          <h1 className='faq-title'>FAQs</h1>
          <div className='faqs'>
            <div>
              <h4>Why should I do airbnb arbitrage on my property?</h4>
              <p>
                Getting a 5-star review is our priority. We have a stake on
                keeping your house in top-notch, high-quality condition more
                than a long-term tenant would! The house is professionally
                cleaned and inspected after every short-term stay, ensuring that
                your property is in good hands. Plus, we run a lucrative
                business, so you are guaranteed your payment every month!
              </p>
              {/* </div>
          <div> */}
              <h4>
                Who are ```Suite Dreams``` guests, and how long are their
                typical stays?
              </h4>
              <p>
                ```Suite Dreams``` guests include those traveling for leisure,
                business, or corporate stays. Our short-term stays average to
                about three nights.
              </p>
            </div>
            <div>
              <h4>How does ```Suite Dreams``` screen their guests?</h4>
              <p>We use Autohost blah blah blah</p>
              {/* </div>
          <div> */}
              <h4>Does ```Suite Dreams``` have a cleaning team?</h4>
              <p>
                After each stay, our professional cleaning team will inspect and
                clean each unit. If a guest stays for an extended period, we
                clean the property weekly upon request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Tours;
