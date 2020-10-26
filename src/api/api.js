import * as axios from 'axios';

const instance = axios.create({
    baseURL: `https://dashboard-i-con.herokuapp.com/`,
});

export const staffAPI = {
    getStaffs(currentPage, pageSize, order, sign) {
        return instance.get(`api/accounts/list?page=${currentPage}&page_size=${pageSize}&order=${order}&sign=${sign}`).then(response => {
            return response.data;
        });
    },
    getStaffsDetail(code){
        return instance.get(`api/accounts/detail/${code}`).then(response => {
            return response.data;
        })
    },

    deleteStaff(code) {
        return instance.delete(`api/accounts/delete/${code}`);
    },

    updateStaff(code, name, phone, role, email, level) {
        return fetch(`https://dashboard-i-con.herokuapp.com/api/accounts/update/${code}`, {
            method: 'PUT',
            body: JSON.stringify({
                full_name: name,
                position: role,
                level: level,
                phone: phone,
                email: email,  
            }),
            headers: {
                'Content-type': 'application/json',
            }

        })
    },
    createStaffs(name, phone, role, email, level){
        return fetch(`https://dashboard-i-con.herokuapp.com/api/accounts/create`, {
            method: 'POST',
            body: JSON.stringify({
                full_name: name,
                position: role,
                level: level,
                phone: phone,
                email: email,  
            }),
            headers: {
                'Content-type': 'application/json',
            }
        })
    }
}

export const locationAPI = {
    getLocation(cities) {
        return instance.get(`api/locations/lists?city=${cities}&street=&region=&micro_region=&res_complex=&admin_region=&search=`).then(response => {
            return response.data;
        })
    }
}