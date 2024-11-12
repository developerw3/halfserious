import { createApi } from 'unsplash-js';

// Creating an Unsplash API instance with the access key
const unsplashApi = createApi({
	accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESSKEY as string,
});

export default unsplashApi;
