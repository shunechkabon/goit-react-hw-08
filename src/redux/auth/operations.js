import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
});

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        console.log("Sending credentials:", credentials);
        const { data } = await axios.post('/users/login', {
            email: credentials.email,
            password: credentials.password,
        });
        token.set(data.token);
        return data;
    } catch (error) {
        console.error('Error during login:', error.response?.data || error.message);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        token.unset();
        localStorage.removeItem('user'); 
        sessionStorage.removeItem('user'); 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    token.set(persistedToken);
    try {
        const { data } = await axios.get('/users/current');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
});
