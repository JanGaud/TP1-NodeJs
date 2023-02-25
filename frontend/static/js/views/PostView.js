import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params)
        this.setTitle("Viewing Post")
    }

    async getHtml() {
       console.log(this.params.id)
        const nu  = Number(this.params.id)

        async function getData(url){
            const response = await fetch(url)
            return response.json()
        }

        const data = await getData('/static/js/views/posts.json')

        const article = data.drinks.find(item => item.idDrink == nu)
        console.log(article)

        return `
        <h1>`+article.strDrink+`</h1>
        <p>`+article.strInstructions+`</p>
        <strong>`+article.strCategory+`</strong>
        <p><a href='/post' data-link>Retour</a></p>
        `;
    }
}