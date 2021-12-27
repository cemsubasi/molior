import { all } from 'redux-saga/effects';
import AddToCartWatcher from './add_to_cart.saga';
import DecreaseItemCountWatcher from './decrease_item_count.saga';
import IncreaseItemCountWatcher from './increase_item_count.saga';
import RemoveFromCartWatcher from './remove_from_cart.saga';
import GetAllCartItemsWatcher from './get_all_cart_items.saga';

export default function* cartSaga() {
  yield all([
    AddToCartWatcher(),
    DecreaseItemCountWatcher(),
    IncreaseItemCountWatcher(),
    RemoveFromCartWatcher(),
    GetAllCartItemsWatcher(),
  ]);
}
