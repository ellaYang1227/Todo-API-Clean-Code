import { fetchAPI } from './apis.js';
import { showMessage } from './all.js';

let todoList = [];

async function getTodos() {
    try {
        const { data: todoResponseData } = await fetchAPI('todos', { method: 'get', isAuthorization: true });
        todoList = todoResponseData;
        renderTodos();
    } catch({ status, message }) {
        showMessage('warning', message);
        return status;
    }
}

const submitButtonElement = document.getElementById('todo-btn');
submitButtonElement.addEventListener('click', () => addTodo());

 // 提示：改使用 async await 寫法
async function addTodo() {
    const addTodoContent = document.getElementById('todo-input').value;

    if (!addTodoContent) return;


    // 提示：加入 try catch
    // 提示：使用 SweetAlert2 有效呈現錯誤資訊
    // 提示：將重複程式碼提取出來
    try {
        await fetchAPI('todos', { 
            method: 'post',
            body: {
            content: addTodoContent
            },
            isAuthorization: true 
        });
        await getTodos();
    } catch({ message }) {
        showMessage('warning', message);
    }
}

function renderTodos() {
    const todoListContainer = document.getElementById('todo-list');
    const html = todoList.reduce((currentHtmlContainer, { content }) => {
        currentHtmlContainer += `<li><b>${content}</b></li>`;
        return currentHtmlContainer;
    }, '');

    todoListContainer.innerHTML = html;
}

// 提示：將重複程式碼提取出來