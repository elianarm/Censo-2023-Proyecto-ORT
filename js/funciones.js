
//Registro censista
function registrarCensista(){
    let nombre = document.querySelector("#registroNombre").value
    let usuario = document.querySelector("#registroNombreUsuario").value
    let clave = document.querySelector("#registroContrasena").value
    let yaExiste = false
    let existeMayuscula = false
    let existeMinuscula = false
    let existeNumero = false

    limpiarCampo("#registroNombre")
    limpiarCampo("#registroNombreUsuario")
    limpiarCampo("#registroContrasena")

    //Busca entre los censistas si existe el usuario
    for (let i=0; i<sistema.listaDeCensistas.length;i++) {
        
        if(sistema.listaDeCensistas[i].usuario == usuario){
            yaExiste = true
        }
    }

    //Busca en la contraseña si tiene minuscula, mayuscula y numero
    for(let i=0;i<clave.length;i++){
        if(clave[i] == clave[i].toUpperCase()){
            existeMayuscula = true
        }
        if(clave[i] == clave[i].toLowerCase()){
            existeMinuscula = true
        }
        if(!isNaN(clave[i])){
            existeNumero = true
        }
    }
    if(yaExiste==true){
        alert('El nombre de usuario ya existe.')
    } else if(clave.length<5){
        alert('La contraseña debe contener 5 o mas caractéres.')
    } else if(existeMayuscula==false){
        alert('La contraseña debe contener al menos una mayúscula.')   
    } else if (existeMinuscula==false){
        alert ("La contraseña debe contener al menos una minúscula")
    } else if (existeNumero==false){
        alert ("La contraseña debe contener al menos un número") 
    }else{
        sistema.listaDeCensistas.push(new Censista(nombre, usuario, clave))
        alert ("Su registro se ha realizado con éxito")
        mostrarMenuCensita()
        document.querySelector("#msgResultado").innerHTML="Bienvenido "+ usuario 
        
    }
}


//Limpia campos de texto
function limpiarCampo(campo){
    document.querySelector(campo).value=""
}

// registo censos
function registroCensado(){
    
    let unNombre = document.querySelector("#nombreCenso").value
    let unApellido = document.querySelector("#apellidoCenso").value
    let unaCedula= document.querySelector("#cedulaCenso").value
    let unaEdad = document.querySelector("#edadCenso").value
    let unaOcupacion =  document.querySelector("#ocupacionCenso").value
    let unDepartamento = document.querySelector("#departamentoCenso").value

    let yaExisteCensado= false

    limpiarCampo("#nombreCenso")
    limpiarCampo("#apellidoCenso")
    limpiarCampo("#edadCenso")
    limpiarCampo("#cedulaCenso")
    limpiarCampo("#ocupacionCenso")
    limpiarCampo("#departamentoCenso")
    

    for (let i=0; i<sistema.listaDeFormularios.length;i++) {
        
        if(limpiarCI(sistema.listaDeFormularios[i].cedula) == limpiarCI(unaCedula)){
            yaExisteCensado = true
        }
    }

    if(yaExisteCensado==true){
        alert('Los datos que intenta ingresar ya han sido registrados')
    }else{
        if(unNombre.length>0 && unApellido.length>0 && unaCedula.length>0 && unaEdad.length>0 && unaOcupacion.length>0 && unDepartamento.length>0){
            sistema.listaDeFormularios.push(new Invitado(unNombre, unApellido, unaCedula, unaEdad, unaOcupacion, unDepartamento))
            agregarInvitadosSlc(unNombre, unApellido, contadorInvitados, sistema.listaDeFormularios[sistema.listaDeFormularios.length-1].validacion)
            alert('El censo se ha registrado con éxito')
            console.log(sistema.listaDeFormularios)
        }else{
            alert("Debe completar todos los campos")
        }
    }
}


// login censista
function loginCensita(){
    let unUsuario=document.querySelector("#ingresoUsuario")
    let unaClave= document.querySelector("#ingresoContrasena")
    let estadoLogin=true
    for (let i=0; i<sistema.listaDeCensistas.length;i++) {
        
        if((sistema.listaDeCensistas[i].usuario).toUpperCase() == (unUsuario.value).toUpperCase() && sistema.listaDeCensistas[i].clave == unaClave.value){
            
            console.log("logeado")
            estadoLogin=false
                 document.querySelector("#divIngresoCensista").style.display="none"
                 document.querySelector("#formMenuCensista").style.display="block"
                 document.querySelector("#msgResultado").innerHTML="Bienvenido "+ unUsuario.value
                 //Carga el resto de los censistas al select de derivar
                 agregarCensistasASlc(sistema.listaDeCensistas[i].id)

            break;
           
        }else{
            estadoLogin=true
        }


    }
    if (estadoLogin){
        alert("Contraseña o usuario incorrectos")
    }
}

//Ocultar menus
function ocultarTodo(){
    document.querySelector("#divCensosXValidar").style.display="none"
    document.querySelector("#divIngresoDatos").style.display="none"
    document.querySelector("#divInfoCensista").style.display="none"
    document.querySelector("#divDerivarPersona").style.display="none"
    document.querySelector("#divEliminarDatos").style.display="none"
    document.querySelector("#divRegistroCensista").style.display="none"
    document.querySelector("#divInfoEstadisticaInvitado").style.display="none"
    document.querySelector("#divBienvenida").style.display="none"
    document.querySelector("#formMenuCensista").style.display="none"
    document.querySelector("#formMenuInvitado").style.display="none"
    document.querySelector("#pBotonEditar").style.display="none"
    document.querySelector("#divBuscarCensado").style.display="none"
    //document.querySelector("#divBotonValidar").style.display = "none"


}




// Botones menu censista
function irIngresoDeCensos(){
    document.querySelector("#formMenuCensista").style.display="none"
    document.querySelector("#divIngresoDatos").style.display="block"
    document.querySelector("#pBotonEditar").style.display="none"
    document.querySelector("#divBuscarCensado").style.display="none"
    document.querySelector("#btnAtrasREGInvitado").style.display="none"
    document.querySelector("#btnAtrasREGCensista").style.display="block"

    
}

function irDerivarInvitado() {
    document.querySelector("#formMenuCensista").style.display="none"
    document.querySelector("#divDerivarPersona").style.display="block"
}

function irValidarDatos() {
    document.querySelector("#formMenuCensista").style.display="none"
    document.querySelector("#tablaBuscarPorCedula").style.display = "none"
    document.querySelector("#divCensosXValidar").style.display="block"
}

function irEliminarDatos() {
    document.querySelector("#formMenuCensista").style.display="none"
    document.querySelector("#divEliminarDatos").style.display="block"
}

function irInfoEstadistica(){
    document.querySelector("#formMenuCensista").style.display="none"
    document.querySelector("#divInfoCensista").style.display="block"
    //agregado 196
    mostrarInfoCensista()
    
}

// botones menu invitado
function irIngresoCensoInv(){
    document.querySelector("#divIngresoDatos").style.display="block"
    document.querySelector("#pBotonEditar").style.display="block"
    document.querySelector("#formMenuInvitado").style.display="none"
    document.querySelector("#divBuscarCensado").style.display="block"
    document.querySelector("#btnAtrasREGInvitado").style.display="block"
    document.querySelector("#btnAtrasREGCensista").style.display="none"

    
}

//Mostrar registro
function mostrarRegistro(){
    document.querySelector("#divRegistroCensista").style.display="block"
    document.querySelector("#divRegistroCensista").style.display="block"
    document.querySelector("#divIngresoCensista").style.display="none"
}


//Mostrar menu del censista
function mostrarMenuCensita(){
    document.querySelector("#divIngresoCensista").style.display="none"
    document.querySelector("#divRegistroCensista").style.display="none"
    document.querySelector("#formMenuCensista").style.display="block"
}
//Mostrar menu invitado
function mostrarMenuInvitado(){
        document.querySelector("#formMenuInvitado").style.display="block"
        document.querySelector("#divIngresoCensista").style.display="none"
}
function eliminarDatosInv(){
    document.querySelector("#formMenuInvitado").style.display="none"
    document.querySelector("#divEliminarDatos").style.display="block"
}

function visualizarInfoInv(){
    document.querySelector("#formMenuInvitado").style.display="none"
    document.querySelector("#divInfoEstadisticaInvitado").style.display="block"
    generarListadoInvitado()
}

//Limpia campos del ingreso de censos
function limpiarCamposCenso(){
    limpiarCampo("#nombreCenso")
    limpiarCampo("#apellidoCenso")
    limpiarCampo("#edadCenso")
    limpiarCampo("#cedulaCenso")
    limpiarCampo("#departamentoCenso")
    limpiarCampo("#ocupacionCenso")
}

//Ocultar menus invitado 
function ocultarTodoInvitado(){
    document.querySelector("#divIngresoDatos").style.display="none"
    document.querySelector("#divdivEliminarDatos").style.display="none"
    document.querySelector("#divInfoEstadisticaInvitado").style.display="none"
}

//Mostrar registro
function mostrarRegistro(){
    document.querySelector("#divRegistroCensista").style.display="block"
    document.querySelector("#divRegistroCensista").style.display="block"
    document.querySelector("#divIngresoCensista").style.display="none"
}
  
// BOTONES DE SALIDA
function  salirMenu(){
    document.querySelector("#divIngresoCensista").style.display="block"
    document.querySelector("#formMenuCensista").style.display="none"
}

function volverALoginDesdeRegistro(){
document.querySelector("#divIngresoCensista").style.display="block"
document.querySelector("#divRegistroCensista").style.display= "none"
}

function volverAMenuDesdeIngCen(){

    document.querySelector("#divIngresoDatos").style.display="none"
    document.querySelector("#formMenuCensista").style.display="block"
}

function volverAMenuInvitadoDesdeIngCen(){

    document.querySelector("#divIngresoDatos").style.display="none"
    document.querySelector("#formMenuCensista").style.display="block"
}

function volverAMenuInvitadoDesdeIngInv(){
    document.querySelector("#divIngresoDatos").style.display="none"
    document.querySelector("#formMenuInvitado").style.display="block"
}

function volverAMenuDesdeDerivarPer(){

    document.querySelector("#divDerivarPersona").style.display="none"
    document.querySelector("#formMenuCensista").style.display="block"
}

function volverAMenuDesdeValPer(){
    document.querySelector("#divCensosXValidar").style.display="none"
    document.querySelector("#formMenuCensista").style.display="block"
}


function volverAMenuDesdeEliminarDat(){
    document.querySelector("#divEliminarDatos").style.display="none"
    document.querySelector("#formMenuInvitado").style.display="block"
}

function volverAMenuDesdeVisualizarDat(){
    document.querySelector("#divInfoCensista").style.display="none"
    document.querySelector("#formMenuCensista").style.display="block"
}
// botones invitado

function volverAloginDesdeMInvitado(){
    document.querySelector("#formMenuInvitado").style.display="none"  
    document.querySelector("#divIngresoCensista").style.display="block"   
}


function volverAlMInvitadoDatos(){
    document.querySelector("#divInfoEstadisticaInvitado").style.display="none"
    document.querySelector("#formMenuInvitado").style.display="block"
}

// Ingreso censista 
function IngresoCensita(){
    document.querySelector("#formMenuInvitado").style.display="none"
    document.querySelector("#divIngresoDatos").style.display="block"
}


//limpiar caracteres de la cedula
function limpiarCI(cedula){
    cedula = cedula.replace("-", "")
    cedula = cedula.replace(".", "")
    cedula = cedula.replace(" ", "")    
    return cedula
}




/* DERIVAR */

//Agregar invitados a select
function agregarInvitadosSlc(nombre, apellido, id, validacion){
    if(validacion==false){
        document.querySelector("#slcPersonaAsignada").innerHTML += `<option value="${id}">${nombre} ${apellido}</option>`
    }
}

//Agregar cesistas a select menos el loggeado
function agregarCensistasASlc(idNoAgregar){
    for(let i=0; i<sistema.listaDeCensistas.length; i++){
        if(sistema.listaDeCensistas[i].id != idNoAgregar){
            document.querySelector("#slcCensista").innerHTML += `<option value="${sistema.listaDeCensistas[i].id}">${sistema.listaDeCensistas[i].nombre}</option>`
        }
    }
}

//Mostrar a que censista esta asociada la persona
function mostrarCensistaAsociado(){
    let invitadoID = document.querySelector("#slcPersonaAsignada").value
    let censistaAsignado = 0
    document.querySelector("#msgCensistaAsignado").innerHTML = ""
    if(invitadoID==""){
        document.querySelector("#msgCensistaAsignado").innerHTML = ""
    }else{
        for (let i = 0; i<sistema.listaDeFormularios.length;i++){

            if(sistema.listaDeFormularios[i].id == invitadoID){
                censistaAsignado = sistema.listaDeFormularios[i].censistaID
                
            }
        }
    
        for (let i = 0; i<sistema.listaDeCensistas.length;i++){
            if(sistema.listaDeCensistas[i].id == censistaAsignado){
                censistaAsignado = sistema.listaDeCensistas[i].nombre
                
            }
        }
        document.querySelector("#msgCensistaAsignado").innerHTML = "El censista asignado es: "+censistaAsignado
    }

}

//Derivar una persona a otro censista
function derivarInvitado(){
    let invitadoID = document.querySelector("#slcPersonaAsignada").value
    let nuevoCensistaID = document.querySelector("#slcCensista").value
    let censista
    let invitado
    if(invitadoID==""){
        alert("Debe ingresar una persona a derivar")
    }else if(nuevoCensistaID==""){
        alert("Debe ingresar censista")
    }else{
        for (let i = 0; i<sistema.listaDeFormularios.length;i++){
            if(sistema.listaDeFormularios[i].id == invitadoID){
                sistema.listaDeFormularios[i].censistaID = nuevoCensistaID
                invitado = sistema.listaDeFormularios[i].nombre +" "+ sistema.listaDeFormularios[i].apellido
            }
        }
        for(let i=0; i<sistema.listaDeCensistas.length; i++){
            if(sistema.listaDeCensistas[i].id == nuevoCensistaID){
                censista = sistema.listaDeCensistas[i].nombre
    
            }
        }
        alert("Se ha derivado a "+invitado+" al censista " + censista +" con éxito")
    }
    
}


let cedulaSearchValidar = ""

function mostrarDatosInvitado (){

    document.querySelector("#tablaBuscarPorCedula").style.display = "none"

    let unaCedulaValidar=document.querySelector("#srchBuscarCensado").value
    cedulaSearchValidar = unaCedulaValidar
    let CedulaEncontrada=false
    let nombrePersona = ""
    let apellidoPersona = ""
    let edadPersona = ""
    let cedulaPersona =""
    let departamentoPersona= ""
    let ocupacionPersona=""
    let validacionPersona

    for (let i=0; i<sistema.listaDeFormularios.length;i++) {

        if (sistema.listaDeFormularios[i].cedula == unaCedulaValidar){
            nombrePersona = sistema.listaDeFormularios[i].nombre
            apellidoPersona = sistema.listaDeFormularios[i].apellido
            edadPersona= sistema.listaDeFormularios[i].edad
            cedulaPersona = sistema.listaDeFormularios[i].cedula
            departamentoPersona= sistema.listaDeFormularios[i].departamento
            ocupacionPersona= sistema.listaDeFormularios[i].ocupacion
            validacionPersona= sistema.listaDeFormularios[i].validacion

            CedulaEncontrada=true
        }   
    
    }
   
    if (CedulaEncontrada==true){
        alert("Cedula encontrada")
                        document.querySelector("#headtable").style.display ="none"
                document.querySelector("#tablaBuscarPorCedula").innerHTML = `
                <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Edad</th>
                  <th>Cédula</th>
                  <th>Departamento</th>
                  <th>Ocupación</th>
                </tr>
              
              </thead>
              <tbody>
                <tr>
                <td>${nombrePersona}</td>
                <td>${apellidoPersona}</td>
                <td>${edadPersona}</td>
                <td>${cedulaPersona}</td>
                <td>${departamentoPersona}</td>
                <td>${ocupacionPersona}</td> 
                </tr>
                </tbody>
                `
        if(validacionPersona==true){    
                document.querySelector("#headtable").style.display ="none"
                document.querySelector("#tablaBuscarPorCedula").innerHTML = `
                <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Edad</th>
                  <th>Cédula</th>
                  <th>Departamento</th>
                  <th>Ocupación</th>
                </tr>
              
              </thead>
              <tbody>
                <tr>
                <td>${nombrePersona}</td>
                <td>${apellidoPersona}</td>
                <td>${edadPersona}</td>
                <td>${cedulaPersona}</td>
                <td>${departamentoPersona}</td>
                <td>${ocupacionPersona}</td> 
                </tr>
                </tbody>
                `
                //document.querySelector("#divBotonValidar").disabled = true
                document.querySelector("#tablaBuscarPorCedula").style.display = "block"

                //document.querySelector("#divBotonValidar").style.display = "block"
        }else{
                document.querySelector("#headtable").style.display ="none"
                document.querySelector("#tablaBuscarPorCedula").innerHTML = `
                <thead>
                <tr>
                  
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Edad</th>
                  <th>Cédula</th>
                  <th>Departamento</th>
                  <th>Ocupación</th>
                </tr>
              </thead>
                <tbody>
                <tr>
                <td>${nombrePersona}</td>
                <td>${apellidoPersona}</td>
                <td>${edadPersona}</td>
                <td>${cedulaPersona}</td>
                <td>${departamentoPersona}</td>
                <td>${ocupacionPersona}</td>
                </tr>
                </tbody>
                `
                document.querySelector("#tablaBuscarPorCedula").style.display = "block"


        }
    } else {
        alert("Cedula NO encontrada")
        document.querySelector("#tablaBuscarPorCedula").style.display = "none"
    }



    
}

//validar persona censada
function validarPersona(){
    let personaEncontrada = false
    let cedulaSearchValidar = document.querySelector("#srchBuscarCensado").value
    for (let i=0; i<sistema.listaDeFormularios.length;i++) {
        if (limpiarCI(sistema.listaDeFormularios[i].cedula) == limpiarCI(cedulaSearchValidar) && sistema.listaDeFormularios[i].validacion == false){
            personaEncontrada = true
            console.log(sistema.listaDeFormularios[i].validacion)
            sistema.listaDeFormularios[i].validacion = true
            console.log(sistema.listaDeFormularios[i].validacion)
            alert("El censo de "+sistema.listaDeFormularios[i].nombre + " " + sistema.listaDeFormularios[i].apellido + " se ha validado con éxito")
            break
        }   
    
    }

    if(personaEncontrada==false){
        alert("La persona ya fue validada")

    }

}


//Mostrar info estadistica a censista
function mostrarCensadosPorDep(){
    let departamentoSelect = document.querySelector("#slcDepartamentoInfoCensista").value
    let contadorCensados = 0
    let contadorMayores = 0
    let porcentajeMayores
    let porcentajeMenores


        for(let i=0; i < sistema.listaDeFormularios.length; i++){
            if(sistema.listaDeFormularios[i].departamento.toUpperCase() == departamentoSelect.toUpperCase()){
                contadorCensados++
                if(sistema.listaDeFormularios[i].edad >=18){
                    contadorMayores++
                }
            }
        }
  

    porcentajeMayores = Math.round(contadorMayores*100/contadorInvitados)
    porcentajeMenores = Math.round(100 - porcentajeMayores)


    document.querySelector("#msgCensadosPorDepartamento").innerHTML = `La cantidad total de censados en ${departamentoSelect} es: ${contadorCensados}.`
    document.querySelector("#msgPorcentajesPorDep").innerHTML = `El porcentaje de menores de edad en ${departamentoSelect} es ${porcentajeMenores}%
                                                                <br> El porcentaje de mayores de edad en ${departamentoSelect} es ${porcentajeMayores}%`
}

function mostrarInfoCensista(){
    let contadorNoValidados = 0
    let porcentajeNoValidados
    document.querySelector("#txtInfoCantidadCensados").innerHTML = contadorInvitados
    
    for(let i=0; i < sistema.listaDeFormularios.length; i++){
        if(sistema.listaDeFormularios[i].validacion == false){
            contadorNoValidados++
        }
    }

    porcentajeNoValidados = Math.round(contadorNoValidados*100/contadorInvitados)
    document.querySelector("#msgPorcentajeValidados").innerHTML = `El porcentaje de censados sin validar es: ${porcentajeNoValidados}%`

}

//Ingreso de censos del invitado
function mostrarDatosCensado(){
    let cedula = document.querySelector("#srchBuscarPorCI").value
    let cedulaBuscar = limpiarCI(cedula)
    let cedulaFormulario
    let cedulaEncontrada = false

    for(let i=0; i<sistema.listaDeFormularios.length; i++){
        cedulaFormulario = limpiarCI(sistema.listaDeFormularios[i].cedula)
        if(cedulaBuscar == cedulaFormulario){
            if(sistema.listaDeFormularios[i].validacion == false){
                cedulaEncontrada = true
                document.querySelector("#nombreCenso").value = sistema.listaDeFormularios[i].nombre
                document.querySelector("#apellidoCenso").value = sistema.listaDeFormularios[i].apellido
                document.querySelector("#edadCenso").value = sistema.listaDeFormularios[i].edad
                document.querySelector("#cedulaCenso").value = sistema.listaDeFormularios[i].cedula
                document.querySelector("#departamentoCenso").value = sistema.listaDeFormularios[i].departamento
                document.querySelector("#ocupacionCenso").value = sistema.listaDeFormularios[i].ocupacion
                document.querySelector("#btnEditarDatos").disabled = false
                break
            } else if(sistema.listaDeFormularios[i].validacion == true){
                cedulaEncontrada = true
                alert("La persona ya fue censada")
                break
            }
        }
    }
    if(cedulaEncontrada == false){
        alert("La persona no fue censada")
    }

}
//editar datos censado
function editarDatosCensados(){
    let cedula = document.querySelector("#srchBuscarPorCI").value
    let cedulaBuscar = limpiarCI(cedula)
    let cedulaFormulario
    let cedulaEncontrada = false
    for(let i=0; i<sistema.listaDeFormularios.length; i++){
        cedulaFormulario = limpiarCI(sistema.listaDeFormularios[i].cedula)
        if(cedulaBuscar == cedulaFormulario){
                cedulaEncontrada = true
                sistema.listaDeFormularios[i].nombre = document.querySelector("#nombreCenso").value
                sistema.listaDeFormularios[i].apellido =  document.querySelector("#apellidoCenso").value
                sistema.listaDeFormularios[i].edad =  document.querySelector("#edadCenso").value 
                sistema.listaDeFormularios[i].cedula =  document.querySelector("#cedulaCenso").value
                sistema.listaDeFormularios[i].departamento = document.querySelector("#departamentoCenso").value
                sistema.listaDeFormularios[i].ocupacion = document.querySelector("#ocupacionCenso").value 
                alert("Se han editado los datos exitosamente")
                limpiarCamposCenso()
                console.log(sistema.listaDeFormularios)
                break
        }
    }
}


//eliminar datos
function eliminarElementoInvitado(){
    let laCedulaAborrar= document.querySelector("#EliminarNombreCenso").value  
    encontrado=false
    for (let i=0; i<sistema.listaDeFormularios.length; i++){
     
        if (limpiarCI(sistema.listaDeFormularios[i].cedula) == limpiarCI(laCedulaAborrar) &&
            sistema.listaDeFormularios[i].validacion == false){
            // a splice le paso la posición del elemento a eliminar
            // y la cantidad de elementos a eliminar en nuestro caso 1
            sistema.listaDeFormularios.splice(i,1)
            alert ("Elemento eliminado")
            console.log(sistema.listaDeFormularios)
            encontrado= true
            break;
        }
    }

    if (!encontrado) { alert("No se puede eliminar")}
    mostrarDatosAEliminar(laCedulaAborrar)
}

// Mostrar datos a eliminar
function mostrarDatosAEliminar(laCedulaAborrar){
    let miTabla=`<table border="1">`

    miTabla+=`<thead>
                <td>id</td>
                <td>nombre</td>
                <td>cedula</td>
              </thead>`

    for (let i=0; i<sistema.listaDeFormularios.length; i++){
        if(limpiarCI(sistema.listaDeFormularios[i].cedula) == limpiarCI(laCedulaAborrar)){
            miTabla+=`<tr>
                <td>${sistema.listaDeFormularios[i].id}</td>
                <td>${sistema.listaDeFormularios[i].nombre}</td>
                <td>${sistema.listaDeFormularios[i].cedula}</td>
            </tr>`
            break
        }
    }
    miTabla+=`</table>`
    document.querySelector("#msgResultadoEliminar").innerHTML=miTabla
}


//// TABLA DATOS INVITADO
function generarListadoInvitado(){

    let validacion, total, noValidacion, porcentaje;
    let sumaOcupaciones = 0
    
    let tabla=`<table border="1">`
    tabla+=`<tr>
                <th>Departamento</th>
                <th>Estudian</th>
                <th>No Trabajan</th>
                <th>Dependientes o Independientes</th>
                <th>% del Total de censados</th>
             </tr>
     `
     for (let unDepartamento of listaDeDepartamentos){
            validacion=cuenteValidadoEnDepartamento(unDepartamento)
            noValidacion= cuenteNoValidadoEnDepartamento(unDepartamento)
            total = contadorInvitados
            porcentaje= ((validacion+noValidacion)*100)/total
            sumaOcupaciones = contarOcupacionEnDepartamento(unDepartamento,"Dependiente")+ contarOcupacionEnDepartamento(unDepartamento,"Independiente")
            tabla+=`<tr>
                        <td>${unDepartamento}</td> 
                        <td>${contarOcupacionEnDepartamento(unDepartamento,"Estudiante")}</td>
                        <td>${contarOcupacionEnDepartamento(unDepartamento,"No trabaja")}</td>
                        <td>${sumaOcupaciones}</td>
                        <td>${porcentaje.toFixed(2)}%</td>
                    </tr>
            `
        }
    tabla+=`</table>`
    document.querySelector("#msgTablaInvitado").innerHTML=tabla

}


function contarOcupacionEnDepartamento(unDepartamento, unaOcupacion){
    cantidad=0
    for (let unInvitado of sistema.listaDeFormularios){

        if(unInvitado.departamento==unDepartamento && 
           unInvitado.ocupacion==unaOcupacion){
            cantidad++
        }
    }
    return cantidad
}

function cuenteValidadoEnDepartamento(unDepartamento){
    total=0
        for(let unInvitado of sistema.listaDeFormularios){
            if (unInvitado.departamento==unDepartamento &&
                unInvitado.validacion==true
                ){
                total++
            }
        }
    return total
}

function cuenteNoValidadoEnDepartamento(unDepartamento){
    total=0
        for(let unInvitado of sistema.listaDeFormularios){
            if (unInvitado.departamento==unDepartamento &&
                unInvitado.validacion==false
                ){
                total++
            }
        }
    return total
}


function MostrarDatosPreEliminar(){
let  MostrarDatos=document.querySelector("#EliminarNombreCenso").value

    let miTabla=`<table border="1">`
    miTabla+=`<thead>
                <td>id</td>
                <td>nombre</td>
                <td>cedula</td>
              </thead>`
              for (let i=0; i<sistema.listaDeFormularios.length; i++){
        if(limpiarCI(sistema.listaDeFormularios[i].cedula) == limpiarCI(MostrarDatos)){
            miTabla+=`<tr>
                <td>${sistema.listaDeFormularios[i].id}</td>
                <td>${sistema.listaDeFormularios[i].nombre}</td>
                <td>${sistema.listaDeFormularios[i].cedula}</td>
            </tr>`
            break
        }
    }
    miTabla+=`</table>`
    document.querySelector("#msgResultadoEliminar").innerHTML=miTabla
}

              
