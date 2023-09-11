import { Bike } from "./bike";
import { User } from "./user";
import { Rent } from "./rent";

export class App {
    users : User[] = [];
    bikes : Bike[] = [];
    rents : Rent[] = [];

// register bike
// remove user
// rent bike
// return bike


    addBike(bike: Bike){
        // ACHAR BIKE
        let B = this.bikes.find(b => b.name === bike.name);
        // VERIFICA SE NAO EXISTE
        if (B === undefined) throw new Error('Bike not found');
        // ADICIONAR BIKE
        this.bikes.push(bike);

    }

    removeUser(user: User){
        // ACHAR USUARIO
        let U = this.users.find(u => u.email === user.email);
        // VERIFICA SE NAO EXISTE
        if (U === undefined) throw new Error('User not found');
        // DELETAR USUARIO
        this.users.splice(this.users.indexOf(U), 1);
    
    }

    rentBike(bike: Bike, user: User){
        // ACHAR USUARIO  
        let U = this.users.find(u => u.email === user.email);
        // VERIFICA SE NAO EXISTE
        if (U === undefined) throw new Error('User not found');
        // ACHAR BIKE
        let B = this.bikes.find(b => b.name === bike.name);
        // VERIFICA SE NAO EXISTE
        if (B === undefined) throw new Error('Bike not found');
        // VERIFICA SE JA ESTA ALUGADA
        if (B.isRented) throw new Error('Bike already rented');
        // CRIAR ALUGUEL
        let R = Rent.create(this.rents, U, B, new Date(), new Date());
        // ADICIONAR ALUGUEL
        this.rents.push(R);
        // MUDAR STATUS DA BIKE
        B.isRented = true;

    }

returnBike(bike: Bike, user: User ){
    // ACHAR USUARIO
    let U = this.users.find(u => u.email === user.email);
    // VERIFICA SE NAO EXISTE
    if (U === undefined) throw new Error('User not found');
    // ACHAR BIKE
    let B = this.bikes.find(b => b.name === bike.name);
    // VERIFICA SE NAO EXISTE
    if (B === undefined) throw new Error('Bike not found');
    // VERIFICA SE JA ESTA ALUGADA
    if (!B.isRented) throw new Error('Bike not rented');
    // ACHAR ALUGUEL
    let R = this.rents.find(r => r.bike.name === bike.name);
    // VERIFICA SE NAO EXISTE
    if (R === undefined) throw new Error('Rent not found');
    // MUDAR STATUS DA BIKE
    B.isRented = false;
    
}


    addUser (user: User) {
        for (const rUser of this.users) {
            if (rUser.email === user.email) {
                throw new Error('User already exists');
            }
        }
        this.users.push(user);
       
    }

    listbikes(){
        return this.bikes;
    }

    listusers(){
        return this.users;
    }
    listrents(){    
        return this.rents;
    }

    login(email: string, password: string) {
        const user = this.users.find(user => user.email === email);
        if (user && user.password === password) {
            return user;
        }
        throw new Error('User not found');
    }
}