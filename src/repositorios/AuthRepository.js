import { jogadores } from "../data/database.js";

export class AuthRepository {
    buscarPorEmail(email){
        for(let i =0; i < jogadores.length; i++){
            if(jogadores[i].email === email){
                return jogadores[i];
            }
        }
        return null;
    }
}