import useWishlist from "../../hooks/useWishlist";
import InteractiveIcon3D from "../InteractiveIcon3D";

function FavoriteButton({ id }) {
  const { addToWishlist, removeFromWishlist, isLoading, isInWishlist } =
    useWishlist(id);

  const handleFavorite = (active) => {
    
    if (active) removeFromWishlist();
    if (!active) addToWishlist();
  };

  if (isLoading) return null;

  return (
    <InteractiveIcon3D
      activated={isInWishlist(id)}
      onPress={handleFavorite}
      type="heart"
    />
  );
}

export default FavoriteButton;
