const PATH={
    url:"/",
    template:"index.html"
}

class Router{
    constructor(path=PATH){
        this.path = path
        this.initRouter()
    }
    initRouter(){   
        console.log(window.location.pathname)
        window.location.hash=234
        console.log(window.location.hash)

    }
}

export default Router