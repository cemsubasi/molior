import { all } from 'redux-saga/effects';
import AddAProductWatcher from './add_a_product.saga';
import DecreaseProductStockWatcher from './decrease_product_stock.saga';
import UpdateAProductWatcher from './update_a_product.saga';
import GetAllProductsWatcher from './get_all_products.saga';
import IncreaseProductStockWatcher from './increase_product_stock.saga';
import PublishAProductWatcher from './publish_a_product.saga';
import RemoveAProductWatcher from './remove_a_product.saga';
import ReproduceAProductWatcher from './reproduce_a_product.saga';

export default function* productSaga() {
  yield all([
    AddAProductWatcher(),
    DecreaseProductStockWatcher(),
    UpdateAProductWatcher(),
    GetAllProductsWatcher(),
    IncreaseProductStockWatcher(),
    PublishAProductWatcher(),
    RemoveAProductWatcher(),
    ReproduceAProductWatcher(),
  ]);
}
