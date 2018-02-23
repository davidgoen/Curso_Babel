class Main {

    constructor(){
        this.user={
            nombre : ""
        }

        this.tarea = ""
        this.aTareas = []

        this.vista = {
            btnReg:  document.querySelector("#btnRegistrar"),
            inNombre: document.querySelector("#nombre"),
            resultado: document.querySelector("#resultados"),
            btnAdd: document.querySelector("#btnAdd"),
            inTarea: document.querySelector("#tarea"),
            tareas: document.querySelector("#resultadoTarea")
        }
        this.vista.btnReg.addEventListener("click",this.btnRegistrar.bind(this),false);
        this.vista.btnAdd.addEventListener("click",this.btnAñadir.bind(this),false);
    }

    btnAñadir(){
        let lista;
        this.tarea = this.vista.inTarea.value;
        this.aTareas.push(this.tarea)
        lista = "<ul>"
        this.aTareas.forEach(item=>lista+=`<li>${item}</li>`)
        lista+="</ul>"
        this.vista.tareas.innerHTML=lista;
    }

    btnRegistrar(){
        console.log(this.user.nombre)
        this.user.nombre=this.vista.inNombre.value;
        //innerHTML mete al final del htlm
        //outerHTML sustituye al objeto al que estamos apuntando
        this.vista.resultado.innerHTML=`<p>Hola ${this.user.nombre}</p>`;
        
        //Para aplicar una clase
        //this.vista.resultado.className = "rojo"; (este pisa las clases y habia una anterior)  o con
        //this.vista.resultado.classList.add("rojo");

        this.vista.resultado.classList.add("rojo");
    }
}

(function () {
    document.addEventListener("DOMContentLoaded", ()=>new Main(),false);
})()