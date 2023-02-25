import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params)
        this.setTitle("Posts")
    }

    async getHtml() {
        async function getData(url){
            const response = await fetch(url)
            return response.json()
        }

        const data = await getData('/static/js/views/posts.json')
        
        let listPosts = "<ul>"
        for(let i in data.drinks){
            listPosts += "<li><a href='/post-view/"+data.drinks[i]['idDrink']+"' data-link>"+data.drinks[i]['strDrink']+"</a></li>"
        }
        listPosts +="</ul>"

        return `
        <h1>Posts</h1>
        `+listPosts;
    }
}