class Api{
    constructor({baseUrl}){
        this._baseUrl = baseUrl;
    }

    // возврат ответа сервера об ошибке
    handleResponse = (res) => {
        if(res.ok){
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    } 

    // запрос на получение карточек
    getInitialCards() {
        return fetch(`${this._baseUrl}/films`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(this.handleResponse)
            
    }

}

const apiConfigg = {
    baseUrl: 'https://ghibliapi.herokuapp.com',
}

// отправка запросов
const api = new Api(apiConfigg);

export default api;