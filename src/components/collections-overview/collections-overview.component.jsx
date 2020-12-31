import React from 'react'
import {connect} from 'react-redux'
import './collections-overview.styles.scss'
import {createStructuredSelector} from 'reselect'
import CollectionPreview from "../../components/collection-preview/collection-preview";
import {selectCollections, selectCollectionForPreview} from '../../redux/shop/shop.selectors'

const CollectionOverview  = ({collections})=>{
  console.log(collections)
  return(

    <div className="collection-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
)}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
  })

export default connect(mapStateToProps)(CollectionOverview)