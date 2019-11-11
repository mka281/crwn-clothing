import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollection } from "../../redux/shop/shop.selectors";
import "./collection.styles.scss";

const CollectionPage = ({ collection }) => (
  <div className="collection">COLLECTION PAGE</div>
);

const mapStateToProps = (state, ownProps) =>
  createStructuredSelector({
    collection: selectShopCollection(ownProps.match.params.collectionId)
  });

export default connect(mapStateToProps)(CollectionPage);
