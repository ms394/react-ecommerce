import React from "react";
import "./shop.css";
import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import {Route} from 'react-router-dom'
import CollectionPage from '../collectionpage/collection.component'

const ShopPage =({match})=>{
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
}



export default ShopPage;
