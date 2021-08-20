import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    state: {
        status: '',
  		token: localStorage.getItem('token') || '',
        user : {},
		user_id:""
    },
    getters: {
		isLoggedIn(state) {
            return !!state.token
        },
		authStatus(state) {
            return state.status
        }
    },
    mutations: {
        auth_request(state){
	    	state.status = 'loading'
	  	},
	  	auth_success(state, token, user){
		    state.status = 'success'
		    state.token = token
		    state.user = user
	  	},
	  	auth_error(state){
	    	state.status = 'error'
	  	},
	  	logout(state){
	    	state.status = ''
	    	state.token = ''
	  	},
    },
    actions: {
        login({commit}, user){
	        return new Promise((resolve, reject) => {
				axios({method: 'post', url: 'https://pvbatt.herokuapp.com/api/token/', data: user})
	            .then(resp => {
	                // const token = resp.data.token
					const token = resp.data.access
	                const user = resp.data.user
					localStorage.setItem('token', token)
					localStorage.setItem('isLoggedIn', true)
	                // Add the following line:
	                axios.defaults.headers.common['Authorization'] = token
	                commit('auth_success', token, user)
	                resolve(resp)
				})
	            .catch(err => {
	                commit('auth_error')
	                localStorage.removeItem('token')
	                reject(err)
	            })
	        })
	    },
	    register({commit}, user){
	    	return new Promise((resolve, reject) => {
	            commit('auth_request')
				console.log(user)
	            axios({method: 'post', url: 'https://pvbatt.herokuapp.com/api/v1/users/register/', data: user})
	            .then(resp => {
					Swal.fire('You are registered successfully')
					// alert("User was created")

	                // const token = resp.data.token
	                // const user = resp.data.user
	                // localStorage.setItem('token', token)
	                // // Add the following line:
	                // axios.defaults.headers.common['Authorization'] = token
	                // commit('auth_success', token, user)
	                resolve(resp)
	            })
	            .catch(err => {
	                commit('auth_error', err)
	                localStorage.removeItem('token')
	                reject(err)
	            })
	        })
	    },
	  	logout({commit}){
		    return new Promise((resolve) => {
		      	commit('logout')
		      	localStorage.removeItem('token')
				localStorage.removeItem('isLoggedIn')
		      	delete axios.defaults.headers.common['Authorization']
		      	resolve()
		    })
	  	}

    }
}
