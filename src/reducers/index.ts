import { swApi } from '@/api/sw-api';

// apiReducer object that maps the reducer path from swApi to swApi.reducer
export const apiReducer = {
	[swApi.reducerPath]: swApi.reducer,
};
// Combining the apiReducer into the main reducer object. Custom reducers can be added here
const reducer = {
	...apiReducer,
};

export default reducer;
