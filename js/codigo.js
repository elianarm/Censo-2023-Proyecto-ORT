let sistema = new Sistema()

let contadorCensistas = 0
let contadorInvitados= 0

class Censista {
    constructor(unNombre, unUsuario, unaClave){
        contadorCensistas++

        this.id = contadorCensistas
        this.nombre = unNombre
        this.usuario = unUsuario
        this.clave = unaClave

    }
}

class Invitado {
   
    constructor(unNombre, unApellido, unaCedula, unaEdad, unaOcupacion, unDepartamento){

        contadorInvitados++

        this.id= contadorInvitados
        this.nombre= unNombre
        this.apellido= unApellido
        this.cedula= unaCedula
        this.edad= unaEdad
        this.ocupacion= unaOcupacion
        this.departamento= unDepartamento
        this.validacion= false
        this.censistaID= Math.floor(Math.random() * (contadorCensistas - 1 + 1) ) + 1
    }
}

let censista1 = new Censista("Juan Carlos Bodoke", "bodokeCarlos", "Clave1")
let censista2 = new Censista("Tulio Triviño", "trivinioTulio", "Clave2")
let censista3 = new Censista("Juanin Juan Harry", "harryJuanin", "Clave3")
sistema.listaDeCensistas.push(censista1, censista2, censista3)

let invitado1= new Invitado("Harry", "Styles", "1234567-8", "29", "Independiente", "Artigas") 
invitado1.validacion= true
agregarInvitadosSlc(invitado1.nombre, invitado1.apellido, invitado1.id, invitado1.validacion)

let invitado2= new Invitado("Taylor", "Swift", "1313131-3", "33", "Independiente", "Maldonado") 
invitado2.validacion= true
agregarInvitadosSlc(invitado2.nombre, invitado2.apellido, invitado2.id, invitado2.validacion)

let invitado3= new Invitado("Dua", "Lipa", "4567891-8", "27", "No trabaja", "Treinta y Tres") 
invitado3.validacion= true
agregarInvitadosSlc(invitado3.nombre, invitado3.apellido, invitado3.id, invitado3.validacion)

let invitado4= new Invitado("Mauro", "Lombardo", "5478961-8", "26", "Estudiante", "Montevideo") 
invitado4.validacion= true
agregarInvitadosSlc(invitado4.nombre, invitado4.apellido, invitado4.id, invitado4.validacion)

let invitado5= new Invitado("Alejo", "Acosta", "4668950-5", "24", "Estudiante", "Montevideo") 
invitado5.validacion= true
agregarInvitadosSlc(invitado5.nombre, invitado5.apellido, invitado5.id, invitado5.validacion)

let invitado6= new Invitado("Michael", "Jackson", "99999-9", "27", "Dependiente", "Canelones") 
invitado6.validacion= true
agregarInvitadosSlc(invitado6.nombre, invitado6.apellido, invitado6.id, invitado6.validacion)

let invitado7= new Invitado("Nicole", "Cucco", "3499528-5", "22", "Independiente", "San José") 
invitado7.validacion= true
agregarInvitadosSlc(invitado7.nombre, invitado7.apellido, invitado7.id, invitado7.validacion)

let invitado8= new Invitado("Paco", "Amoroso", "6351222-8", "29", "No trabaja", "Salto") 
invitado8.validacion= true
agregarInvitadosSlc(invitado8.nombre, invitado8.apellido, invitado8.id, invitado8.validacion)

let invitado9= new Invitado("Catriel", "Fernandez", "6351225-8", "29", "Estudiante", "Salto") 
invitado9.validacion= true
agregarInvitadosSlc(invitado9.nombre, invitado9.apellido, invitado9.id, invitado9.validacion)

let invitado10= new Invitado("Indra", "Bhalavan", "6351223-8", "29", "No trabaja", "Paysandú") 
invitado10.validacion= true
agregarInvitadosSlc(invitado10.nombre, invitado10.apellido, invitado10.id, invitado10.validacion)

let invitado11= new Invitado("Neo", "Pistea", "6351224-8", "20", "No trabaja", "Río Negro") 
invitado11.validacion= true
agregarInvitadosSlc(invitado11.nombre, invitado11.apellido, invitado11.id, invitado11.validacion)

let invitado12= new Invitado("Dylan", "Masa", "6351226-8", "21", "Dependiente", "Canelones") 
invitado12.validacion= true
agregarInvitadosSlc(invitado12.nombre, invitado12.apellido, invitado12.id, invitado12.validacion)

let invitado13= new Invitado("Nahuel", "Acosta", "6351227-8", "22", "Independiente", "Cerro Largo") 
invitado13.validacion= true
agregarInvitadosSlc(invitado13.nombre, invitado13.apellido, invitado13.id, invitado13.validacion)

let invitado14= new Invitado("Julieta", "Cazzuchelli", "6351228-8", "28", "Independiente", "Colonia") 
invitado14.validacion= true
agregarInvitadosSlc(invitado14.nombre, invitado14.apellido, invitado14.id, invitado14.validacion)

let invitado15= new Invitado("Maria", "Becerra", "6351229-8", "22", "Independiente", "Durazno") 
invitado15.validacion= true
agregarInvitadosSlc(invitado15.nombre, invitado15.apellido, invitado15.id, invitado15.validacion)

let invitado16= new Invitado("Emilia", "Mernes", "6351230-8", "33", "No trabaja", "Flores") 
invitado16.validacion= true
agregarInvitadosSlc(invitado16.nombre, invitado16.apellido, invitado16.id, invitado16.validacion)

let invitado17= new Invitado("Densise", "Cucco", "6351231-8", "34", "Estudiante", "Florida") 
invitado17.validacion= true
agregarInvitadosSlc(invitado17.nombre, invitado17.apellido, invitado17.id, invitado17.validacion)

let invitado18= new Invitado("Mateo", "Corazzina", "6351232-8", "30", "Dependiente", "Lavalleja") 
invitado18.validacion= true
agregarInvitadosSlc(invitado18.nombre, invitado18.apellido, invitado18.id, invitado18.validacion)

let invitado19= new Invitado("Valentín ", "Olivia", "6351233-8", "25", "Dependiente", "Maldonado") 
invitado19.validacion= true
agregarInvitadosSlc(invitado19.nombre, invitado19.apellido, invitado19.id, invitado19.validacion)

let invitado20= new Invitado("Tiago", "Pacheco", "6351234-8", "29", "Estudiante", "Rivera") 
invitado20.validacion= true
agregarInvitadosSlc(invitado20.nombre, invitado20.apellido, invitado20.id, invitado20.validacion)

let invitado21= new Invitado("Mauro", "Monzón", "6351235-8", "18", "No trabaja", "Rocha") 
invitado21.validacion= true
agregarInvitadosSlc(invitado21.nombre, invitado21.apellido, invitado21.id, invitado21.validacion)

let invitado22= new Invitado("Thomas", "Tobar", "6351236-8", "21", "Dependiente", "Montevideo") 
invitado22.validacion= false
agregarInvitadosSlc(invitado22.nombre, invitado22.apellido, invitado22.id, invitado22.validacion)

let invitado23= new Invitado("Enzo", "Sauthier", "6351237-8", "21", "Estudiante", "San José") 
invitado23.validacion= false
agregarInvitadosSlc(invitado23.nombre, invitado23.apellido, invitado23.id, invitado23.validacion)

let invitado24= new Invitado("Paulo", "Londra", "6351238-8", "19", "Dependiente", "Montevideo") 
invitado24.validacion= false
agregarInvitadosSlc(invitado24.nombre, invitado24.apellido, invitado24.id, invitado24.validacion)

let invitado25= new Invitado("Lara", "Artesi", "6351239-8", "19", "Estudiante", "Paysandú") 
invitado25.validacion= false
agregarInvitadosSlc(invitado25.nombre, invitado25.apellido, invitado25.id, invitado25.validacion)

let invitado26= new Invitado("Sebastián", "Chinellato", "6351240-8", "27", "Estudiante", "Rivera") 
invitado26.validacion= false
agregarInvitadosSlc(invitado26.nombre, invitado26.apellido, invitado26.id, invitado26.validacion)

let invitado27= new Invitado("Gonzalo", "Conde", "6351241-8", "41", "Dependiente", "Treinta y Tres") 
invitado27.validacion= true
agregarInvitadosSlc(invitado27.nombre, invitado27.apellido, invitado27.id, invitado27.validacion)

let invitado28= new Invitado("Ezequiel", "Pereira", "5361251-8", "41", "Estudiante", "San José") 
invitado28.validacion= false
agregarInvitadosSlc(invitado28.nombre, invitado28.apellido, invitado28.id, invitado28.validacion)

let invitado29= new Invitado("Elian", "Arman", "4888322-8", "41", "Dependiente", "Soriano") 
invitado29.validacion= false
agregarInvitadosSlc(invitado29.nombre, invitado29.apellido, invitado29.id, invitado29.validacion)

let invitado30= new Invitado("Marshall", "Mathers ", "6351243-8", "41", "Independiente", "Tacuarembó") 
invitado30.validacion= false
agregarInvitadosSlc(invitado30.nombre, invitado30.apellido, invitado30.id, invitado30.validacion)

let listaDeDepartamentos=["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandú",
 "Río Negro", "Rivera", "Rocha", "Salto", "San José", "Soriano", "Tacuarembó", "Treinta y Tres",]
 
sistema.listaDeFormularios.push (invitado1, invitado2, invitado3, invitado4, invitado5, invitado6, invitado7, invitado8, invitado9, invitado10, invitado11,
    invitado12, invitado13, invitado14, invitado15, invitado16, invitado17, invitado18, invitado19, invitado20, invitado21, invitado22, invitado23, invitado24, invitado25, invitado26,
    invitado27, invitado28, invitado29, invitado30)

ocultarTodo()


//Registro censista 
document.querySelector("#btnRegistrarseRegistro").addEventListener("click", registrarCensista)

/// registro invitado
document.querySelector("#btnIngresarPersona").addEventListener("click", registroCensado)

// login censita
document.querySelector("#ingresoBtnIngresar").addEventListener("click", loginCensita)

//Boton registrarse ingreso censista
document.querySelector("#btnRegistrarseIngreso").addEventListener("click", mostrarRegistro)

//botones de volver
document.querySelector("#btnVolveralMenuLogin").addEventListener("click", volverALoginDesdeRegistro)
document.querySelector("#btnSalir").addEventListener("click", salirMenu)
document.querySelector("#btnAtrasREGCensista").addEventListener("click", volverAMenuInvitadoDesdeIngCen)
document.querySelector("#btnAtrasREGInvitado").addEventListener("click", volverAMenuInvitadoDesdeIngInv)
document.querySelector("#btnAtrasDEV").addEventListener("click", volverAMenuDesdeDerivarPer)
document.querySelector("#btnAtrasVAL").addEventListener("click", volverAMenuDesdeValPer)
document.querySelector("#btnAtrasELM").addEventListener("click", volverAMenuDesdeEliminarDat)
document.querySelector("#btnAtrasVISDAT").addEventListener("click", volverAMenuDesdeVisualizarDat)
document.querySelector("#btnVolverLoginINV").addEventListener("click", volverAloginDesdeMInvitado)
document.querySelector("#btnVolverAMenuInv").addEventListener("click", volverAlMInvitadoDatos)

//Botones de menu censista
document.querySelector("#btnIngresoDeCensos").addEventListener("click", irIngresoDeCensos)
document.querySelector("#btnDerivarMenuCensista").addEventListener("click", irDerivarInvitado)
document.querySelector("#btnValidarMenuCensista").addEventListener("click", irValidarDatos)

document.querySelector("#btnInfoEstadistica").addEventListener("click", irInfoEstadistica)


//Botones menu invitado
document.querySelector("#btnIngresoDeCensosInvitado").addEventListener("click", irIngresoCensoInv)
document.querySelector("#btnEliminarDatosInvitado").addEventListener("click", eliminarDatosInv)
document.querySelector("#btnInfoInvitado").addEventListener("click", visualizarInfoInv )
//document.querySelector("#btnEliminarDatos").addEventListener("click", irEliminarDatos)


//Menu Invitado
document.querySelector("#btnIngresarComoInvitado").addEventListener("click", mostrarMenuInvitado)


//boton borrar datos
document.querySelector("#btnBorrarDatos").addEventListener("click", limpiarCamposCenso)

//boton derivar 
document.querySelector("#btnDerivar").addEventListener("click", derivarInvitado)


document.querySelector("#slcPersonaAsignada").addEventListener("change", mostrarCensistaAsociado)

//srch invitado
document.querySelector("#btnBuscarCensado").addEventListener("click", mostrarDatosInvitado)

// validar censado
document.querySelector("#BtnValidarCensado").addEventListener("click", validarPersona)

document.querySelector("#btnMostrarCensadosPorDep").addEventListener("click", mostrarCensadosPorDep)

// eliminar datos
document.querySelector("#btnEliminar").addEventListener("click", eliminarElementoInvitado)

//buscar censado
document.querySelector("#btnBuscarCICensada").addEventListener("click", mostrarDatosCensado)

//editar censado
document.querySelector("#pBotonEditar").addEventListener("click", editarDatosCensados)


document.querySelector("#btnBuscarParaEliminar").addEventListener("click", MostrarDatosPreEliminar)

