// *modello di come appare una ricetta
export class Recipe {
    // assegnamo un nome e tipo
    public name: string;
    public description: string;
    // inseriamo anche un img (non mem.) url dal web e sara una stringa
    public imagePath: string;

    // creiamo una funzione incorporata di ogni classe che verra' eseguita una volta creata una nuova istanza di questa classe.
    constructor(name: string, desc: string, imagePath: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}