class Usuario{
    constructor(nome,email,password){
        this.nome = nome
        this.email = email
        this.password = password
    }

    nome(){
        return this.nome
    }
 
    email(){
        return this.email
    }

    password(){
        return this.password
    }

}



class Administrador extends Usuario{
    constructor(nome,email,password,nivel){
        super(nome,email,password)
        this.nivel = nivel
    }
}


let user = new Usuario("joao", "joao@email.com", "password123")

console.log(user)