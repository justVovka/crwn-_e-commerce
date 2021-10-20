import { Component } from 'react';

import SHOP_DATA from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

class ShopPage extends Component {

  state = {
    collections: SHOP_DATA
  }

  render() {
    return (
      <div className='shop-page'>
        {
          this.state.collections
            .map(({ id, ...otherCollectionProps }) => (
            <PreviewCollection key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    );
  }
}

export default ShopPage;
