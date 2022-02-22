import axios from "axios";

axios.interceptors.response.use(null, (error) => {
	const expectedError =
		error.response &&
		error.response.status >= 400 &&
		error.response.status < 500;

	console.log(error);

	if (!expectedError) {
		console.log("logging error", error);
		alert("Unexpected err");
	}

	return Promise.reject(error);
});

export default {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
};
