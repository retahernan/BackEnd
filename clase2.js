class Usuario {
    constructor (nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido 
        this.libros = []
        this.mascotas = []
    }
    getFullName (){
        return `Nombre y apellido: ${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota){
        this.mascotas.push(mascota);
    }
    countMascotas(){
        return this.mascotas.length;
    }
    addBook(nombre , autor){
        this.libros.push({nombre , autor});
    }
    getBookNames(){
        return this.libros.map(({nombre}) => (nombre));
    }
}

// Declaro el usuario
const usuarioNuevo = new Usuario("Hernán", "Reta");
//Retorno el nombre completo
console.log(usuarioNuevo.getFullName());

// Agrego mascotas
usuarioNuevo.addMascota("Perro");
usuarioNuevo.addMascota("Gato");
usuarioNuevo.addMascota("Hamster");
//Retorno la cantidad de mascotas que tiene el usuario
console.log(`Cantidad de mascotas: ${usuarioNuevo.countMascotas()}`);

// Agrego libros
usuarioNuevo.addBook("Don quijote de la mancha", "Miguel de Cervantes");
usuarioNuevo.addBook("Mujercitas", "Louisa May Alcott");
usuarioNuevo.addBook("Guerra y Paz", "León Tolstói");
usuarioNuevo.addBook("Drácula", "Bram Stoker");
//Muestro los nombres de los libros
console.log(`Libros: ${usuarioNuevo.getBookNames()}`);



