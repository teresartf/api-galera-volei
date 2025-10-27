export class Partida {
    constructor(id, local, data, categoria, status = "nova" ){
        this.id = id;
        this.local = local;
        this.data = data;
        this.categoria = categoria;
        this.status = status;
    }
}