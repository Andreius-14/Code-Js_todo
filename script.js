import { readFile, writeFile } from 'fs';


const tarea = document.querySelector(".tareas");
const cajaInput = document.querySelector(".contenedorInputs");

const etiqueta = document.createElement.bind(document);


function casilla() {
  const texto = tarea.value.trim();

  if (texto) {
    //Checkbot
    const checkbox = etiqueta("input");
    checkbox.type = "checkbox";
    checkbox.classList.add('extra--boton');

    //Conetido
    const contenido = etiqueta("label");
    contenido.classList.add('extra--label');
    contenido.textContent = `🌱 ${texto}`;

    const cajaTarea = etiqueta("div");
    cajaTarea.appendChild(checkbox);
    cajaTarea.appendChild(contenido); 

    objetoDatos(contenido.textContent)
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


// 🟥🟥🟥🟥🟥🟥

function objetoDatos (tarea) {

  const fecha = new Date();
  const objeto = {
    tarea : `${tarea}`,
    fechaCreada:`${fecha}`,
  };
  AgregaContenidoJson('datos.json',objeto);
}

function AgregaContenidoJson(nombreArchivo,nuevoContenido){

  readFile(nombreArchivo,'utf8',(e,data)=>{
    if (e) {
      writeFile(nombreArchivo,"{}");
      AgregaContenidoJson(nombreArchivo,nuevoContenido);
      return false;
    }

    const dataArchivoObjeto = JSON.parse(data);
    dataArchivoObjeto.push(nuevoContenido);
    const dataArchivoJson = JSON.stringify(dataArchivoObjeto);

    writeFile(nombreArchivo,dataArchivoJson,'utf8', (e)=>{ e? console.log(e): console.log(`Guardado con Exito: ${nuevoContenido.tarea}`);});
  })

}


// const now = new Date();
  
// if (now - yesterday >= 86400000) {
//   console.log('Ha pasado un día completo');
// } else {
//   console.log('No ha pasado un día completo aún');
// }