import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "./../../components/collection-overview/collections-overview.container";
import CollectionPageContainer from "../collections/collections.component";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  selectIsCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
