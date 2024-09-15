import { fetchAPI } from './apis.js';
import { showMessage, isEmptyField, userData } from './all.js';

// 提示：改使用 async await 寫法
async function signIn(userData) {
    isEmptyField(userData.email, userData.password);

    // 提示：加入 try catch
    // 提示：使用 SweetAlert2 有效呈現錯誤資訊
    // 提示：函式一次只做一件事
    try {
        const { token: newToken } = await fetchAPI('users/sign_in', { method: 'post', body: userData });
        localStorage.setItem('token', newToken);
        showMessage('success', '登入成功').then(() => location.href = '/todos.html');
    } catch({ message }) {
        showMessage('warning', message);
    }
}
signIn(userData);