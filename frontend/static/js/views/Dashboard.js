import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params)
        this.setTitle("Acceuil")
    }

    async getHtml() {
        return `
        <section class="intro"
            <h1>Cocktail Mag</h1>
            <p>Bienvenue sur notre page d'accueil dédiée aux recettes de cocktails ! Ici, vous trouverez une sélection de recettes de boissons alcoolisées et non alcoolisées, toutes testées et approuvées par notre équipe d'experts en mixologie. Que vous soyez à la recherche d'un cocktail classique, d'une boisson rafraîchissante pour l'été ou d'une création originale, vous trouverez sûrement quelque chose qui vous plaira. Découvrez nos recettes, apprenez-en davantage sur les ingrédients et les techniques de mixologie, et profitez de conseils utiles pour servir les boissons parfaites à chaque fois. Nous espérons que vous apprécierez votre visite et que vous découvrirez de nouvelles recettes à ajouter à votre répertoire de cocktails préférés !</p>
            <p>
                <a href="/post" data-link>Voir les cocktails populaires</a>
            </p>
        </section>
        `;
    }
}