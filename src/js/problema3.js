class Perro {
    constructor(nombre, tamaño, colita, color) {
        this.nombre = nombre;
        this.tamaño = tamaño;
        this.colita = colita;
        this.color = color;
        this.correaPuesta = false;
        this.quieto = false;
        this.sentado = false;
        this.pasear = false;
        this.distraido = true;
        this.spriteCaminando = ["./src/perro/caminar1.png", "./src/perro/caminar2.png", "./src/perro/caminar3.png", "./src/perro/caminar4.png", "./src/perro/caminar5.png"];
    }
    sentarse() {
        if (!this.sentado) {
            this.sentado = true;
            this.distraido = false;
            alert(`El ${this.nombre} se sentó`);
            document.getElementById("imagen__perrito").setAttribute("src", "./src/perro/sentado.png");
            this.distraerse();
        } else {
            alert("Ya está sentado");
        }
    }
    distraerse() {
        window.setTimeout(() => {
            if (!this.correaPuesta) {
                this.sentado = false;
                this.distraido = true;
                alert("Se distrajo, vuelve a sentarlo")
                document.getElementById("imagen__perrito").setAttribute("src", "./src/perro/parado.png");
            }
        }, 5000);
    }

    indicarQuieto() {
        if (!this.quieto) {
            this.quieto = true;
            alert(`El ${this.tamaño} se quedó quieto`);
            this.distraerse();
        } else {
            alert("Ya está quieto")
        }
    }
    correa() {
        if (this.quieto && this.sentado && !this.correaPuesta) {
            this.correaPuesta = true;
            alert("Correa puesta, ahora a pasear");
        } else if (this.correaPuesta && this.quieto && this.sentado) {
            this.correaPuesta = false;
            alert("Correa sacada, ya eres libre");
        } else if (!this.sentado || !this.quieto) {
            alert("Primero debe sentarse y quedarse quieto")
        }
    }
    pasearTRESMIl(index) {
        window.setTimeout(() => {
            document.getElementById("imagen__perrito").setAttribute("src", this.spriteCaminando[index]);
            index++;
            if(index == 5){
                index = 0;
            }
            if (!this.quieto){
                this.pasearTRESMIl(index);
            }else{
                this.pasear = false;
                document.getElementById("imagen__perrito").setAttribute("src", "./src/perro/parado.png");
            }
        }, 500); 
        
    }
    salirPasear() {
        if (this.correaPuesta) {
            this.sentado = false;
            this.quieto = false;
            this.pasear = true;
            alert("Vamos a pasear");
            this.pasearTRESMIl(0);           
        } else {
            alert("Primero debes ponerle la correa")
        }
    }
}

let perro1 = new Perro("Morito", "Pequeño", "Peluda", "Negrito");

