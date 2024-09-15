export async function loadHeader() {
    try {
        const { data } =  await axios.get('./header/header.html');
        document.querySelector('body').insertAdjacentHTML('afterbegin', data);
    } catch (error) {
        console.error('載入 header 時發生錯誤：', error)
    }
}