export class AuthService{
    constructor(repository){
        this.repository = repository;
    }

    login(email, senha){
        const jogador = this.repository.buscarPorEmail(email);
        if(!jogador) throw new Error("Email não encontrado");
        if(jogador.senha !== senha) throw new Error("Senha incorreta");
        return jogador;
    }
}