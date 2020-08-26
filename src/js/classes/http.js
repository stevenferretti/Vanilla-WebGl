export default class Http {
    constructor() {

    }

    /**
     * 
     * @param {string} route
     * Promisify the XHR request so we can use it async  
     */
    get(route) {
        return new Promise((res, rej) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', route);
            xhr.send(null);
            xhr.onreadystatechange = function () {
                if (xhr.status === 200) {
                    if (xhr.readyState === 4) {
                        res(xhr.responseText);
                    } 
                } else {
                    rej(xhr.status); 
                }
            };
        });
    }
}