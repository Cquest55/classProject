(() => {
    if(storageHasData()){
        const isAuth = getStorage('isAuth');
        if(!isAuth){
            window.location.href = '/index';
        }
    }
})();