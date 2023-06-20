import { tourList } from "../data"

const Tours = () => {
    return(
        <section className ="section" id="tours">
        <div className ="section-title">
          <h2>featured <span>tours</span></h2>
        </div>
  
        <div className ="section-center featured-center">

          {tourList.map((tour) => {
            return(
              <article className ="tour-card">
              <div className ="tour-img-container">
                <img src= {tour.img} className ="tour-img" alt="" />
                <p className ="tour-date">{tour.date}</p>
              </div>
              <div className ="tour-info">
                <h4>{tour.place}</h4>
                <p>
                  {tour.info}
                </p>
                <div className ="tour-footer">
                  <p>{tour.days}</p>
                  <p>{tour.price}</p>
                </div>
              </div>
            </article>
            )
          })}

        </div>
      </section>
    )
}

export default Tours