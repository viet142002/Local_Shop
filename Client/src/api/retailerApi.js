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
    try {
        const res = await api.get('/retailer/infoMyRetailer');
        return res.data;
    } catch (error) {
        return error.response.message;
    }
};

export const getRetailerByIdApi = async (id) => {
    try {
        const res = await api.get(`/retailer/${id}`);
        return res.data;
    } catch (error) {
        return error.response.message;
    }
};

export const registerRetailerApi = async (values) => {
    try {
        const res = await api.post('/retailer/register', values);
        return res.data;
    } catch (error) {
        return error.response.message;
    }
};

export const getRequestsRetailerApi = async () => {
    try {
        const res = await api.get('/retailer/requests');
        return res.data;
    } catch (error) {
        return error.response.data.message;
    }
};

export const acceptRequestApi = async (id) => {
    try {
        const res = await api.put(`/retailer/acceptRequest/${id}`);
        return res.data;
    } catch (error) {
        return error.response.message;
    }
};

export const rejectRequestApi = async (id) => {
    try {
        const res = await api.put(`/retailer/rejectRequest/${id}`);
        return res.data;
    } catch (error) {
        return error.response.message;
    }
};
