//variables que representen a los selectores.
/*const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

/*
- en caso de que querramos utilizar document.getElementById() ya no colocamos el # .
- en caso de que querramos utilizar document.getElementsByClassName() ya no colocamos el .  . 
- los querySelector lo tenemos que colocar como si fueran css. 
*/

//el querySelectorAll selecciona todas las etiquetas ya sea de p , h1 , input y crea una lista
/*console.log(input.value=133);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

//otra manera
/*
console.log(h1);
console.log(p);
console.log(parrafit);
console.log(pid);
*/
/*
//modificamos el h1 con el innerHTML , convierte a codigo html
h1.innerHTML = 'Patito <br> Feo';

//convierte todo a texto
h1.innerText = 'Patito <br> Feo';

//imprime el valor del atributo que le damos.
console.log(h1.getAttribute('class'));

//modificamos el atributo "class" del h1
h1.setAttribute('class','rojo');

//le agregamos una clase mas al h1
h1.classList.add('morado');

//eliminamos una clase en particular
h1.classList.remove('morado');

//h1.classList.toggle('verde') - cuando tenemos eventos , le ponemos una clases si no lo tiene y lo quitamos si l tiene
//h1.classList.contains('verde') - devuelve true o false si tiene la clase que le decimos.

//le ponemos un valor al input desde javascript
input.value = "456";

//creamos una etiqueta html 
console.log(document.createElement('span'));

//creamos una etiqueta img , luego le creamos un atributo 'src' con un link ,  y lo imprimimos
const img = document.createElement('img');
img.setAttribute('src','https://images.pexels.com/photos/15954341/pexels-photo-15954341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
console.log(img);

//borramos el contenido del parrafo pero no la eitqueta.
pid.innerHTML = "";

//insertamos el img en el parrafo
pid.append(img);

*/

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')

//no le ponemos parentesis a la funcion btnOnclick , porque addvenetlistenner le coloca 
btn.addEventListener('click',sumarInputValues);

//addEventListener nos da como parametro event que es lo que se ejecuta.

function sumarInputValues(event){
    //console.log(event);
    //le decimos que no ejecute lo que debe ejecutar por defecto , en este caso , recargar la pagina.
    //event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado : " + input1.value + " + "+ input2.value + " =  " + sumaInputs;
}

 