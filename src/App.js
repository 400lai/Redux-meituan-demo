import NavBar from './components/NavBar'
import Menu from './components/Menu'
import Cart from './components/Cart'
import FoodsCategory from './components/FoodsCategory'

import './App.scss'
import { useDispatch,useSelector } from "react-redux";
import { fetchFoodsList } from "./store/modules/takeaway";
import { useEffect } from "react";


const App = () => {
  // 触发 action 执行
  // 1.获取 Redux 的 dispatch 函数
  const dispatch = useDispatch()
  // 2. 组件挂载时执行 useEffect 钩子
  useEffect(() => {
    dispatch(fetchFoodsList())
  }, [dispatch]);

  // 从 Redux store 中获取食品列表数据用于渲染
  const { foodsList } = useSelector(state => state.foods)
  return (
    <div className="home">
      {/* 导航 */}
      <NavBar />

      {/* 内容 */}
      <div className="content-wrap">
        <div className="content">
          <Menu />

          <div className="list-content">
            <div className="goods-list">
              {/* 外卖商品列表 */}
              {foodsList.map(item => {
                return (
                  <FoodsCategory
                    key={item.tag}
                    // 列表标题
                    name={item.name}
                    // 列表商品
                    foods={item.foods}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 购物车 */}
      <Cart />
    </div>
  )
}

export default App
