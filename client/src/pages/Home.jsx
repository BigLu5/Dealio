import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home({ favourites, setFavourites }) {
  const [results, setResults] = useState([]);
  const [location, setLocation] = useState("");
  const [discountDay, setDay] = useState("");
  const [category, setCategory] = useState("");
  const [showFilteredResults, setShowFilteredResults] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) {
      setFavourites(JSON.parse(storedFavourites));
    }
    getResults();
  }, []);

  async function getResults() {
    const API = `http://localhost:8080/results`;
    const res = await axios.get(API);
    setResults(res.data);
  }

  function handleLocationFilter(event) {
    event.preventDefault();
    setLocation(event.target.value);
    handleFilterChange();
  }

  function handleCategoryFilter(event) {
    event.preventDefault();
    setCategory(event.target.value);
    handleFilterChange();
  }

  function handleDayFilter(event) {
    event.preventDefault();
    setDay(event.target.value);
    handleFilterChange();
  }

  const handleFavourite = (result) => {
    console.log("Adding to favourites:", result);

    // Check if the result is already in favourites
    const isAlreadyAdded = favourites.some((fav) => fav._id === result._id);

    if (!isAlreadyAdded) {
      // If not, add to favourites
      setFavourites([...favourites, result]);
      localStorage.setItem(
        "favourites",
        JSON.stringify([...favourites, result])
      );
    }
  };

  const filteredResults = results.filter(function (result) {
    return (
      (result.location === location || location === "") &&
      (result.category === category || category === "") &&
      (result.discountDay === discountDay || discountDay === "")
    );
  });

  console.log("Favourites state before link:", favourites);

  const handleShowFilteredResults = () => {
    setShowFilteredResults(true);
  };

  const handleFilterChange = () => {
    setShowFilteredResults(false);
  };

  return (
    <main>
      <div id="opening-div">
        <img id="mainImg1" src="/assets/unsplash/restaurant4.png" />
        <div className="home-box" id="home">
          <h1>Welcome to Dealio</h1>
          <p>
            The app to find deals in your area, whether you are looking for
            discounts on drinks, or free food, we are here to help!
          </p>
          <br></br>
          <p>
            Simply use the filters below to find the deals you want. Click on
            the results you fancy for more details, and save your faves by
            pressing the add to favourites button. Your favourites can be
            accessed from the main menu.
          </p>
          <br></br>
          <p>So dive in to get your deal, and remember,</p>
          <br></br>
          <h2>NEVER PAY FULL PRICE!</h2>
        </div>
      </div>

      <section id="filter">
        <form onChange={handleLocationFilter}>
          <div className="filter-group">
            <label className="filter-label">Filter by location:</label>
            <select name="location" className="filter-select">
              <option value=""> All </option>
              <option value="UK wide"> UK Wide </option>
              <option value="Manchester"> Manchester </option>
              <option value="Liverpool"> Liverpool </option>
            </select>
          </div>
        </form>

        <form onChange={handleCategoryFilter}>
          <div className="filter-group">
            <label className="filter-label">Filter by category:</label>
            <select name="category" className="filter-select">
              <option value=""> All </option>
              <option value="Fast food"> Fast Food </option>
              <option value="Japanese"> Japanese </option>
              <option value="Street food"> Street Food </option>
              <option value="Fine dining"> Fine Dining </option>
              <option value="Bar"> Bar </option>
              <option value="Pub"> Pub </option>
            </select>
          </div>
        </form>

        <form onChange={handleDayFilter}>
          <div className="filter-group">
            <label className="filter-label">Filter by day of discount:</label>
            <select name="discountday" className="filter-select">
              <option value=""> All </option>
              <option value="Weekday"> All Weekdays </option>
              <option value="Weekend"> All Weekend Days </option>
              <option value="Monday"> Monday </option>
              <option value="Tuesday"> Tuesday </option>
              <option value="Wednesday"> Wednesday </option>
              <option value="Thursday"> Thursday </option>
              <option value="Friday"> Friday </option>
              <option value="Saturday"> Saturday </option>
              <option value="Sunday"> Sunday </option>
            </select>
          </div>
        </form>
        <button onClick={handleShowFilteredResults}>
          Show Filtered Results
        </button>
      </section>

      {showFilteredResults && (
        <div id="results">
          {filteredResults.length > 0 && <h2 id="resultsTitle">Results</h2>}
          {filteredResults.map((result) => {
            const isAlreadyAdded = favourites.some(
              (fav) => fav._id === result._id
            );
            return (
              <div className="resultDiv" key={result._id}>
                <Link to={`/results/${result._id}`}>
                  <h2>{result.businessName}</h2>
                  <img
                    className="result-logo"
                    src={result.logoImage}
                    alt={result.businessName}
                  />
                </Link>
                <h3>{result.location}</h3>
                <h3>{result.discountDay}</h3>
                <h3>{result.offer}</h3>
                <img
                  className="result-img"
                  src={result.businessImage}
                  alt={result.businessName}
                />
                <button
                  id="fave-button"
                  onClick={() => handleFavourite(result)}
                  disabled={isAlreadyAdded}
                >
                  {isAlreadyAdded ? "Added to Favourites" : "Add to Favourites"}
                </button>
              </div>
            );
          })}
        </div>
      )}
      <div id="featured-deals">
        <h2>FEATURED DEALS</h2>
        <Slider autoplay={true} autoplaySpeed={4000}>
          {results.map((result) => {
            return (
              <div className="featured-div" key={result._id}>
                <Link to={`/results/${result._id}`}>
                  <h2>{result.businessName}</h2>
                </Link>
                <img src={result.logoImage} alt={result.businessName} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div id="before-footer"></div>
    </main>
  );
}

export default Home;
