
export const getToken = () => {
    if(typeof window !== 'undefined'){
        return localStorage.getItem("user:accesskey");
    }
   
};

export const setToken = (token) =>{
    localStorage.setItem("user:accesskey", token);
}

export const getUserDataS = () => {
    if(typeof window !== 'undefined'){
        return JSON.parse(localStorage.getItem("uFitSub:user"));
    }
    return {}
   
};

export const setUserDataS = (userData) =>{
    localStorage.setItem("uFitSub:user", JSON.stringify(userData));
}
    
    
export const DeleteAuthToken = (token) =>{
    localStorage.removeItem("user:token");
}
export const DeleteAuthTokenMaster = (name) =>{
    localStorage.removeItem(name);
}