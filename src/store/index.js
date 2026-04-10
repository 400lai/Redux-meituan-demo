import foodsReducer from './modules/takeaway'
import { configureStore } from "@reduxjs/toolkit";

// 创建并配置 Redux store
const store = configureStore({
    // 定义 reducer，将 foodsReducer 挂载到 foods 命名空间下
    reducer: {
        foods: foodsReducer
    }
})

// 导出 store 实例供应用使用
export default store