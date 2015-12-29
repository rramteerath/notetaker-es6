//es5
//var axios = require('axios');

// es6
import axios from 'axios'

function getRepos(username) {
	//es5
	//return axios.get('https://api.github.com/users/' + username + '/repos');

	//es6
	return axios.get(`https://api.github.com/users/${username}/repos`);
};

function getUserInfo(username) {
	//es5
	//return axios.get('https://api.github.com/users/' + username);

	//es6
	return axios.get(`https://api.github.com/users/${username}`);
};

// es5
// var helpers = {
// 	getGithubInfo: function(username) {
// 		// axios.all returns a promise for the data returned by each method in the input array.
// 		// The data is returned once all methods have completed.
// 		return axios.all([getRepos(username), getUserInfo(username)])
// 			.then(function(arr){
// 				return {
// 					repos: arr[0].data,
// 					bio: arr[1].data
// 				}
// 			});
// 	}
// };

// es6
export default function getGithubInfo(username) {
	return axios.all([getRepos(username), getUserInfo(username)])
		.then((arr) => ({ repos: arr[0].data, bio: arr[1].data }))
}

// es5
//module.exports = helpers;

// es6
//export default helpers;
