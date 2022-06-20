const cookie = require('js-cookie');


// Set in Cookie
export const setCookie = (key:string, value:string) => {
    if (String(window) !== 'undefiend') {
        cookie.set(key, value, {
            // 1 Day
            expires: 1
        }) 
    }
}
// remove from cookie
export const removeCookie = (key:string) => {
    if (String(window) !== 'undefined') {
        cookie.remove(key, {
            expires: 1
        }); 
    }
};


// Get from cookie such as stored token
// Will be useful when we need to make request to server with token
export const getCookie = (key:string) => {
    if (String(window) !== 'undefined') {
        return cookie.get(key);
    }
};

// Set in localstorage
export const setLocalStorage = (key:string, value:string) => {
    if (String(window) !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

// Remove from localstorage
export const removeLocalStorage = (key:string) => {
    if (String(window) !== 'undefined') {
        localStorage.removeItem(key);
    }
};

// Auth enticate user by passing data to cookie and localstorage during signin
export const authenticate = (response:any, next:any) => {
    console.log('AUTHENTICATE HELPER ON SIGNIN RESPONSE', response);
    setCookie('modulo_jwt', response.data.token);
    setLocalStorage('mo_user', response.data.admin);
    next();
};

// Access user info from localstorage
export const isAuth = () => {
    if (String(window) !== 'undefined') {
        const cookieChecked = getCookie('modulo_jwt');
        if (cookieChecked) {
            if (localStorage.getItem('mo_user')) {
                // return true;
                return JSON.parse(localStorage.getItem('mo_user') || '{}');
            } else {
                return false;
            }
        }
    }
};

export const signout = (next:any) => {
    removeCookie('modulo_jwt');
    removeLocalStorage('mo_user');
    next();
};

export const updateUser = (response:any, next:any) => {
    console.log('UPDATE USER IN LOCALSTORAGE HELPERS', response);
    if (typeof window !== 'undefined') {
        let auth = JSON.parse(localStorage.getItem('mo_user') || '{}');
        auth = response.data;
        localStorage.setItem('mo_user', JSON.stringify(auth));
    }
    next();
};