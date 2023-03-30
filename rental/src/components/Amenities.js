import { amenitiesData } from '../data';

const Amenities = () => {
  return (
    <section className='amenities'>
      <div className='amenities-desc'>
        <h1>Amenities</h1>
        <p>
          Our homes feature modern and stylish furnishings, comfortable bedding,
          and high-end appliances. We pride ourselves on providing exceptional
          service and ensuring that our guests have a memorable stay.
        </p>
        <div className='amenities-list'>
          {amenitiesData.map((amenity) => (
            <div key={amenity.title}>
              <img src={amenity.photo} alt={amenity.title} className='photo'/>
              <p>{amenity.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
