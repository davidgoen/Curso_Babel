
/*Cuando hay errores del this pork cambia su valor se puede utilizar el metodo
.bind(this) y ejecutaria el metodo que sea, lo de antes del punto del objeto this pasado
    document.querySelectorAll("#btnRegistrar")[0].addEventListener("click",this.btnRegistrar.bind(this),false)
    quiere decir que cuando encuentre un this dentro del objeto lo enlace a el this del bind
    this.btnRegistrar.bind(this)
*/
class Main {

    constructor(){
        console.log("Documento Cargado")
        //console.dir(window); -> directorio de todo el elemento window
        console.log(document.querySelector("#btnSaludar"))
        console.log(document.querySelectorAll("#btnRegistrar")[0])
        document.querySelector("#btnSaludar").addEventListener("click",this.btnSaludar,false)
        document.querySelectorAll("#btnRegistrar")[0].addEventListener("click",this.btnRegistrar,false)
        document.querySelector("#btnGoogle").addEventListener("click",this.btnGoogle,false)
    }

    btnSaludar(){
        alert("Hola a todos");
    }
    
    btnRegistrar(){
        let user = prompt("Dime tu Nombre","Pepe");
    }
    
    //Interactua con la barra del navegador, tanto para leer como escribir
    btnGoogle(){
        console.log(window.location.href);
        window.location.href="https://www.google.com"
    }

}

(function (){
    document.addEventListener("DOMContentLoaded",
        ()=>{oMain= new Main()},false);
})();