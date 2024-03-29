import api from './instantApi';

export const getRetailerApi = async () => {
    try {
        const res = await api.get('/retailer');
        return res.data;
    } catch (error) {
        return error.response.message;
    }
};

export const getInfoMyRetailerApi = async () => {
    return api.get('/retailer/infoMyRetailer');
};

export const getRetailerByIdApi = async (id) => {
    return api.get(`/retailer/${id}`);
};

export const registerRetailerApi = async (values) => {
    return api.post('/retailer/register', values, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const getRequestsRetailerApi = async () => {
    try {
        const res = await api.get('admin/retailer/requests');
        return res.data;
    } catch (error) {
        return error.response.data.message;
    }
};

export const acceptRequestApi = async (id) => {
    try {
        const res = await api.put(`admin/retailer/acceptRequest/${id}`);
        return res.data;
    } catch (error) {
        return error.response.message;
    }
};

export const rejectRequestApi = async (id) => {
    try {
        const res = await api.put(`admin/retailer/rejectRequest/${id}`);
        return res.data;
    } catch (error) {
        return error.response.message;
    }
};
