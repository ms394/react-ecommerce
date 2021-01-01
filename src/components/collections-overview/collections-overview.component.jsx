import React from 'react'
import {connect} from 'react-redux'
import './collections-overview.styles.scss'
import {createStructuredSelector} from 'reselect'
import CollectionPreview from "../../components/collection-preview/collection-preview";
import {selectCollections, selectCollectionForPreview} from '../../redux/shop/shop.selectors'

const CollectionOverview  = ({collections})=>{
  console.log(collections)
  //pk_test_51I4SCyDDrAZGET9ot0N11yU10nNsdRLzJmW2WKiwBJ9rlwPgilPdERdCNpPBBsiCBsxUQCpbWA1S4TRazH1Padcj00a1PQ30pT
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