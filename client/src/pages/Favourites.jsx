import { useEffect } from "react";

const Favourites = ({ favourites, setFavourites }) => {
  console.log("Favourites component mounted");

  useEffect(() => {
    // Retrieve favourites from local storage when the component mounts
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) {
      setFavourites(JSON.parse(storedFavourites));
    }
  }, []); // Ensure the effect runs only on mount

  const handleRemoveFavourite = (removedFavourite) => {
    // Update state to remove the specified favourite
    setFavourites((prevFavourites) =>
      prevFavourites.filter((favourite) => favourite !== removedFavourite)
    );

    const updatedFavourites = favourites.filter(
      (favourite) => favourite !== removedFavourite
    );
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <div id="fav">
      <h1>Favourites</h1>
      {favourites.length === 0 ? (
        <div>
          <h2>No favourites yet.</h2>
          <img id="mainImg1" src="assets/unsplash/bar2.png" />
        </div>
      ) : (
        favourites.map((favourite) => {
          return (
            <div className="resultDiv" key={favourite._id}>
              <h2>{favourite.businessName}</h2>

              <img
                src={favourite.logoImage}
                alt={favourite.businessName}
                id="fav-logo"
              />
              <h3>{favourite.location}</h3>
              <h3>{favourite.discountDay}</h3>
              <h3>{favourite.category}</h3>
              <h3>{favourite.offer}</h3>
              <img
                src={favourite.businessImage}
                alt={favourite.businessName}
                id="fav-image"
              />

              <button
                id="remove-fav"
                onClick={() => handleRemoveFavourite(favourite)}
              >
                Remove from Favourites
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Favourites;
