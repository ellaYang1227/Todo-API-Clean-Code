import { fetchAPI } from './apis.js';
import { showMessage, isEmptyField, userData } from './all.js';

async function signUp(userData) {
    isEmptyField(userData.email, userData.password);

    try {
        await fetchAPI('users/sign_up', { method: 'post', body: userData })
        showMessage('success', '註冊成功');
    } catch ({ message }) {
        showMessage('warning', message);
    }
}

signUp({ ...userData, nickname: 'admin' });