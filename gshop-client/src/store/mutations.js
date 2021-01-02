// 直接更新state的多个方法对象
import Vue from 'vue'
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_INFO,
    RECEIVE_RATINGS,
    RECEIVE_GOODS,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS
} from './mutation-types'
export default {
    [RECEIVE_ADDRESS] (state, {address}) {
        state.address = address
      },
    
      [RECEIVE_CATEGORYS] (state, {categorys}) {
        state.categorys = categorys
      },
    
      [RECEIVE_SHOPS] (state, {shops}) {
        state.shops = shops
      },
      [RECEIVE_USER_INFO] (state, {userInfo}){
        state.userInfo = userInfo
      },
      [RESET_USER_INFO] (state,){
        state.userInfo = {}
      },
      [RECEIVE_INFO](state, {info}) {
        state.info = info
      },
    
      [RECEIVE_RATINGS](state, {ratings}) {
        state.ratings = ratings
      },
    
      [RECEIVE_GOODS](state, {goods}) {
        state.goods = goods
      },
      [INCREMENT_FOOD_COUNT](state, {food}) {
        if(!food.count) {//第一次增加
          // food.count = 1 //这样新增的属性没有数据绑定
          // 对象，属性名，属性值
          Vue.set(food,'count',1)//向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的 拥有数据绑定
          state.cartFoods.push(food)
        } else {
          food.count++
        }
      },
      [DECREMENT_FOOD_COUNT](state, {food}) {
          if(food.count) {//只有有值才减
            food.count--
            if(food.count===0){
              // 将food从cartFoods中移出
              state.cartFoods.splice(state.cartFoods.indexOf(food),1)
            }
          }
      },
      [CLEAR_CART](state) {
        // 清除food中的count
        state.cartFoods.forEach(food => food.count = 0 )
        // 移出购物车中所有的购物项
        state.cartFoods = []
      },
      [RECEIVE_SEARCH_SHOPS] (state, {searchShops}) {
        state.searchShops = searchShops 
      },
    }