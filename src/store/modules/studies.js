import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user : {}
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
    },
    actions: {
        studies({commit}, project,study_name,created_by){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios.interceptors.request.use(function (config) {
                    document.querySelector('.NewProjectForm__send').disabled=true;
                    return config;

                }, function (error) {
                    // Do something with request error
                    return Promise.reject(error);
                });
                axios({method: 'post', url: 'https://pvbatt.herokuapp.com/api/v1/study-new', data: project,study_name,created_by})
                    .then(resp => {
                        Swal.fire('Created')
                        document.querySelector('.NewProjectForm__send').disabled=false;
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
        }
    }
}
