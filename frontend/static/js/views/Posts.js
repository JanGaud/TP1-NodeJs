import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params)
        this.setTitle("Les cocktails populaires")
    }

    async getHtml() {
        async function getData(url){
            const response = await fetch(url)
            return response.json()
        }

        const data = await getData('/static/js/views/posts.json')
        
        let listPosts = "<section class='populaires-li'><ul>"
        for(let i in data.drinks){
            listPosts += "<li><a href='/post-view/"+data.drinks[i]['idDrink']+"' data-link>"+data.drinks[i]['strDrink']+"</a></li>"
        }
        listPosts +="</ul><section>"

        return `
        <h1>Les cocktails populaires</h1>
        `+listPosts;
    }
}