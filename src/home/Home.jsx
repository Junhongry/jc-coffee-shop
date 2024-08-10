import "./home.css"

export const Home = () => {
  return (
    <div>
      <section className="home" id='home'>
        <div className="home-container container">
          <div className="home-content">
            <span className="home-subtitle">Welcome! </span>
            <h1 className="home-title">  JC Coffee shop and bakery</h1>
           
            <div className="home-btns">
              <a href="menu" className="btn"> 
                Check Menu
              </a>
              <a href="gallery" className="btn home-btn" > 
                Photo Gallery
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
