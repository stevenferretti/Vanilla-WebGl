/**
 * Singleton, Allows App to set keydown events with function, similar to observable
 */
class KeyListener {

    constructor() {
        this.listeners = {};
        this.initiateListener();
    }

    initiateListener() {
        // Call Keydown with arrow function to un-bind this
        document.addEventListener('keydown', (e) => { this.keyDown(e) });
    }
    /**
     * 
     * @param {string} code i.e ArrowRight
     * @param {function} func i.e () => {}
     */
    setListener(code, func) {
        if (!this.listeners[code]) {
            this.listeners[code] = [];
        }
        this.listeners[code].push(func);
    }

    /**
     * 
     * @param {string} key i.e ArrowDown 
     */
    getListenersForKey(key) {
        return this.listeners && this.listeners[key] ? this.listeners[key] : false;
    }

    /**
     * 
     * @param {object} e 
     */
    keyDown(e) {
        const listeners = this.getListenersForKey(e.code);
        if (listeners) {
            for (const func of listeners) {
                func();
            }
        }
    }
}
// Export as a singleton
export default new KeyListener();