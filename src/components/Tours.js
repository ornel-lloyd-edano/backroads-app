import Title from "./Title";
import { tours } from "../data";

const Tour = (prop) => {
  return (
    <article className="tour-card" key={prop.id}>
      <div className="tour-img-container">
        <img src={prop.src} className="tour-img" alt="" />
        <p className="tour-date">{prop.date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{prop.title}</h4>
        </div>
        <p>{prop.text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {prop.loc}
          </p>
          <p>{prop.days} days</p>
          <p>from ${prop.price}</p>
        </div>
      </div>
    </article>
  );
};

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured Tours" focusedOnTitle="Tours" />
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return (
            <Tour
              id={tour.id}
              src={tour.src}
              date={tour.date}
              title={tour.title}
              text={tour.text}
              loc={tour.loc}
              days={tour.days}
              price={tour.price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
