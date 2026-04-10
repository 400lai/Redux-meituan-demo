import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodStore = createSlice({
    name: 'foods',
    initialState: {
        foodsList: []
    },
    reducers: {
        // 定义一个名为 setFoodsList 的 reducer 函数
        // 接收两个参数：state (当前状态) 和 action (动作对象)
        setFoodsList(state, action) {
            // 将 action.payload（数据）赋给 state.foodsList
            state.foodsList = action.payload
        }
    }
})

// 从 foodStore 对象中解构出自动生成的 action 创建函数 setFoodsList
const { setFoodsList } = foodStore.actions
// 定义一个异步 action 创建函数（Thunk），用于处理异步逻辑
const fetchFoodsList = () => {
    // 返回一个异步函数，接收 dispatch 参数
    return async dispatch => {
        const res = await axios.get('http://localhost:3004/takeaway')
        // 调用 dispatch 函数，将 action 创建函数 setFoodsList 和数据 res.data 派发给 reducer
        dispatch(setFoodsList(res.data))
    }
}

// 导出异步获取食品列表的 thunk action creator
export { fetchFoodsList }
// 导出 foodStore 的 reducer，用于配置 store
const reducer = foodStore.reducer
export default reducer
