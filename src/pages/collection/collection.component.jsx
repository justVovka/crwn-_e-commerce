import {connect} from 'react-redux';

import './collection.styles.scss';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';
import CollectionsContext from '../../contexts/collections/collections.context';

const CollectionPage = ({ match }) => {
  return (
    <CollectionsContext.Consumer>
      {
        collections => {
          const { title, items } = collections[match.params.collectionId];
          return (
            <div className='collection-page'>
              <h2 className='title'>{title}</h2>
              <div className='items'>
                {
                  items.map(item =>
                    <CollectionItem key={item.id} item={item} />)
                }
              </div>
            </div>
          );
        }
      }
    </CollectionsContext.Consumer>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
