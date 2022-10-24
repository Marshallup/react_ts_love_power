import React from "react";
import { Link } from "react-router-dom";

const MenuPage = () => {
  return (
    <ul>
      <li><Link className='good good--2' to='/index'>index</Link></li>
      <li><Link className='good good--2' to="/trending">Trending collections</Link></li>
      <li><Link className='good good--2' to="/create-item">Create New Item</Link></li>
      <li><Link className='good good--2' to="/create-collection">Create New Collection</Link></li>
      <li><Link className='good good--2' to="/collection-nft">Collection NFTs</Link></li>

      {/*
      <li><a className='good good--2' href="collection_activity.html">Collection Activity</a></li>

      <li><a className='good good--2' href="personal_collection.html">Personal (Show Collections)</a></li>
      <li><a className='good good--2' href="personal_nft.html">Personal (Show NFTs)</a></li>
      <li><a className='good good--2' href="nft_buyer.html">NFT page (Buyer)</a></li>
      <li><a className='good good--2' href="nft_seller.html">NFT page (Seller)</a></li>
      <li><a className='good good--2' href="fixed_price.html">Fixed Price</a></li>

      <li><a className='good good--2' href="create_collection-v2.html">Create New Collection 2</a></li> */}

    </ul>
  )
}

export default MenuPage;