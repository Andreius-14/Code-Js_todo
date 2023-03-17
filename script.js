

const tarea = document.querySelector(".tareas");
const cajaInput = document.querySelector(".contenedorInputs");
const checkboxes = document.getElementsByClassName('extra--boton');

const etiqueta = document.createElement.bind(document);

tarea.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    casilla();
  }
});


function casilla() {
  const texto = tarea.value.trim();

  if (texto) {
    //Checkbot
    const checkbox = etiqueta("input");
    checkbox.type = "checkbox";
    checkbox.classList.add('extra--boton');

    //Contenido
    const contenido = etiqueta("label");
    contenido.classList.add('extra--label');  
    contenido.textContent = `🌱 ${texto}`;

    const cajaTarea = etiqueta("div");
    cajaTarea.appendChild(checkbox);
    cajaTarea.appendChild(contenido); 

    //🌱 Eventos
    cajaTarea.addEventListener('click',()=>{
      checkbox.click();
      // Abreviado a -> classList - add - remove
      cajaTarea.classList.toggle('terminado', checkbox.checked);
      eliminarTodo();
    });  

    inserta(cajaTarea);
  }

}

function inserta(obj) {

const hijos = document.querySelectorAll(".contenedorInputs > *");
  if(hijos){
    cajaInput.insertBefore(obj,hijos[0])
  }else{
    cajaInput.appendChild(obj);
  }

  tarea.value = ""
}

function eliminarTodo () {
  // body
  let valor = Array.from(checkboxes).every(element => {
    return element.checked;
  });
  if (valor) {
    Array.from(checkboxes).forEach(element => {
      element.parentNode.remove();
    });
  }
}