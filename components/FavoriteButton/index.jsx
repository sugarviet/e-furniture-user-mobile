import { useState } from "react";
import useWishlist from "../../hooks/useWishlist";
import InteractiveIcon3D from "../InteractiveIcon3D";
import LoadingSpinner from "../LoadingSpinner";

function FavoriteButton({ id }) {
  const { addToWishlist, removeFromWishlist, isLoading, isInWishlist } =
    useWishlist(id);

  if (isLoading) return <LoadingSpinner />;

  const handleFavorite = () => {
    if (isInWishlist(id)) removeFromWishlist();
    if (!isInWishlist(id)) addToWishlist();
  };

  return (
    <InteractiveIcon3D
      active={isInWishlist(id)}
      onPress={handleFavorite}
      type="heart"
    />
  );
}

export default FavoriteButton;
