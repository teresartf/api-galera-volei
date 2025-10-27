export class Avaliacao{
    constructor(id, tipo, remetenteId, destinatarioId, nota, comentario){
        this.id = id;
        this.tipo = tipo;
        this.remetenteId = remetenteId;
        this.destinatarioId = destinatarioId;
        this.nota = nota;
        this.comentario = comentario;
    }
}