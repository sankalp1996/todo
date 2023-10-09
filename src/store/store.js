import { configureStore } from '@reduxjs/toolkit'

import taskSlice from '../slice/taskSlice'

const store = configureStore({
    reducer:{
        addNew:taskSlice.reducer,
        deleteTask:taskSlice.reducer,
    }
})

export default store