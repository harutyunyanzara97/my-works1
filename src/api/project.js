import axios from 'axios'

const apiProject = {
    projectListAll: function (pagNumber) {
        return axios.get('http://127.0.0.1:8000/api/v1/project/list' + '?page=' + pagNumber)
    }
}

export default apiProject