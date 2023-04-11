import {configureStore} from '@reduxjs/toolkit';
import drilledReducer from './Slices/drilledSlice';

export default configureStore({
    reducer: {
        drilled: drilledReducer
    }
});