
/*
Calcular huella de carbono de las empresas y organizaciones

Huella de carbono = Dato Actividad (DA) x Factor Emisión (FE) 

HC Calefacción por uso de Caloventor
DA = Consumo (1,5 kWh/h) x Promedio consumo (5 h/día) x Tiempo (80 días) = 600 kWh
FE (Energía eléctrica) = 0.5 kgCO2eq/kWh
HC = 600 kWh x 0.5 kgCO2eq/kWh = 300 kgCO2eq

*/
class Organizacion {
    constructor(nombre, consumo,tipo) {
        this.nombre = nombre;
        this.consumo = consumo;
        this.tipo = tipo;
    }
}

const organizaciones = [];
organizaciones.push(new Organizacion("Aple", 1500,"privada"));
organizaciones.push(new Organizacion("CoceCole",218,"privada"));
organizaciones.push(new Organizacion("Softmicro",6812,"privada"));
organizaciones.push(new Organizacion("MacDormand",1100,"privada"));
organizaciones.push(new Organizacion("Aguaya",9812,"publica"));
console.log (organizaciones);

const total = organizaciones.reduce((acumulado,org) => acumulado + org.consumo,0)
console.log(`El consutmo total es de ${total}`)

function buscarOrganizacion(organizaciones,organizacion) {
    return organizaciones.find(objeto => objeto.nombre.toUpperCase() == organizacion.toUpperCase())
}

for (let index = 0; index < 4; index++) {
    let busqueda = buscarOrganizacion(organizaciones, prompt('Ingrese el nombre de la organización que busca:'));
    if (busqueda != undefined) {
        alert (`Nombre: ${busqueda.nombre}
Consumo: ${busqueda.consumo}
Tipo: ${busqueda.tipo}`);
    }else{
        alert (`No ingresó una organización`);
    }
}