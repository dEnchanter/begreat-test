
export const getToken = () => {
    if(typeof window !== 'undefined'){
        return localStorage.getItem("begreatFinace:accesskey");
    }
   
};

export const setToken = (token) =>{
    localStorage.setItem("begreatFinace:accesskey", token);
}

export const getUserDataS = () => {
    if(typeof window !== 'undefined'){
        return JSON.parse(localStorage.getItem("begreatFinace:user"));
    }
    return {}
   
};

export const setUserDataS = (userData) =>{
    localStorage.setItem("begreatFinace:user", JSON.stringify(userData));
}
    
    
export const DeleteAuthToken = (token) =>{
    localStorage.removeItem("user:token");
}
export const DeleteAuthTokenMaster = (name) =>{
    localStorage.removeItem(name);
}