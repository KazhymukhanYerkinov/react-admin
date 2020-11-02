import * as axios from 'axios';

const instance = axios.create({
    baseURL: `https://dashboard-i-con.herokuapp.com/`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`,
        'Accept': 'application/json'
    }
});

export const staffAPI = {
    getStaffs(currentPage, pageSize, order, sign) {
        const config = {
            headers: {
                'Authorization': `JWT ${localStorage.getItem('access')}`,
            }
        }
        return instance.get(`api/accounts/list?page=${currentPage}&page_size=${pageSize}&order=${order}&sign=${sign}`, config).then(response => {
            return response.data;
        });
    },
    getStaffsDetail(code){

        return instance.get(`api/accounts/detail/${code}`).then(response => {
            console.log(response.data);
            return response.data;
        })
    },

    deleteStaff(code) {
        const config = {
            headers: {
                'Authorization': `JWT ${localStorage.getItem('access')}`,
            }
        }
        return instance.delete(`api/accounts/delete/${code}`, config);
    },

    updateStaff(code, name, phone, role, email, level, password) {

        return fetch(`https://dashboard-i-con.herokuapp.com/api/accounts/update/${code}`, {
            method: 'PUT',
            body: JSON.stringify({
                full_name: name,
                position: role,
                level: level,
                phone: phone,
                email: email,  
                password: password,
            }),
            headers: {
                'Content-type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
            }

        })
    },
    createStaffs(name, phone, role, email, level, password){
        return fetch(`https://dashboard-i-con.herokuapp.com/api/accounts/create`, {
            method: 'POST',
            body: JSON.stringify({
                full_name: name,
                position: role,
                level: level,
                phone: phone,
                email: email,  
                password: password,
            }),
            headers: {
                'Content-type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
            }
        })
    }
}

export const authAPI = {
    login(email, password){
        const body = JSON.stringify({ email, password });

        return instance.post(`api/auth/jwt/create`, body).then(response => {
            return response.data;
        })
    },
    getUser() {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };
        return instance.get(`api/auth/users/me`, config).then(response => {
            return response.data;
        })
    },
    checkAuth() {
        const body = JSON.stringify({ token: localStorage.getItem('access') });          
        return instance.post(`api/auth/jwt/verify`, body).then(response => {
            return response;
        })
    },
    createUser(email, full_name, phone, password, re_password) {
        const body = JSON.stringify({ email, full_name, phone, password, re_password })
        return instance.post(`api/auth/users`, body).then(res => {
            return res.data;
        })
    }
}

export const requestAPI = {
    getRequests(currentPage, page) {
        const config = {
            headers: {
                'Authorization': `JWT ${localStorage.getItem('access')}`,
            }
        }
        return instance.get(`api/accounts/requests?page=${currentPage}&page_size=${page}`, config).then(response => {
            return response.data;
        });
    },
    checkRequest(accept, code) {
        const config = {
            headers: {
                'Authorization': `JWT ${localStorage.getItem('access')}`,
            }
        }
        const body = JSON.stringify({ accept, code  });
        return instance.post(`api/accounts/accept`, body, config).then(response => {
            return response;
        })
    }

}