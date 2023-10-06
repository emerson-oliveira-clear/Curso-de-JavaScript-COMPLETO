class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0
    }
    //metodo de instancia
    aumentarVolume() {
        this.volume += 2
    }
    //metodo de instancia
    diminuirVolume() {
        this.volume -= 2
    }
    //metodo estatico
    static trocaPilha() {
        console.log('ok, vou trocar')
    }
}

const controle1 = new ControleRemoto('LG');

controle1.aumentarVolume();//2
controle1.aumentarVolume();//4
controle1.aumentarVolume();//6
controle1.diminuirVolume();//4
ControleRemoto.trocaPilha()
console.log(controle1)