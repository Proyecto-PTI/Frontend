# Frontend


## IMPORTANTE: ANTES DE HACER PUSH, ASEGURAROS DE TENERLO LO MAS ACTUALIZADO POSSIBLE Y DE QUE EJECUTE CORRECTAMENTE 
*Enserio, no me metais codigo que no funciona, vamos a mantenerlo limpito >:(*

## ESTRUCTURA :

Se trabaja dentro del **src**, donde podreis encontrar : 

- Components :
    *En esta Carpetita tenemos algunos componentes disseñados para que los podamos usar al implementar las vistas.*
- Frames : 
    *En esta otra, tenemos las vistas como tal.*
- App : 
    *Este es el "main" por asi decirlo de la web bebes.*
- Index+Main : 
    *Todavia no me he enterado mucho de que es, pero es el envoltorio final de la web, aqui a veces hay que añadir referencias y cosas.* 


Cada componente/vista se conforma de 2 archivos: 
- .jsx -> *la estructura de la vista, donde se retorna el html y se implementa la logica*
- .module.css -> *los colorcitos, donde se definen los estilos de cada cosita del html*


## PARA EJECUTAR :

$npm run front
   - *Os devolvera el puerto donde se esta ejecutando, normalmente el 5173*

$npm run back
   - *Os devolvera el puerto donde se esta ejecutando, el 5000*

### CON LO CUAL YA NO ES NECESARIO HACER LO DE ABAJO SI YA TIENES LAS DEPENDENCIAS INSTALADAS

FUNCIONAMINTO DASHBOARD + VIEWLOGS PARA QUE OS VAYA BIEN :
He añadido un bakend fake para que sepais como se han de pasar los datos, de hecho podeis aprovechar ya lo que hay para el backend. 
- Hay la carpeta src/api donde dentro hay la api para el dashboard
- Hay la carpeta src/server y en el index.js está el formato de como se ha de pasar los datos al dashboard 

PARA QUE OS FUNCIONE:
Ir a src/server i poner 
- npm install express cors
- node index.js
- node logs.js

Luego ir a la carpeta Frontend
- npm install react-chartjs-2 chart.js  (esto solo si os dice que no teneis instalado)
- nmp run dev



## COMPONENTES :

A continuación os dejo la lista con los componentes que hay disponibles actualmente para que los useis para crear las vistas como querais bebitos. 

- Web Header 
    *Incluye el logo FACEPASS y el titulo de la vista* 
- User Header
    *Incluye la imagen de user, el nombre del user editable + un pequeño lapiz, y las tres propiedades principales: Role del Usuario, Email del usuario y Numero de telefono.* 
- AddImages
    *Componente que permite al usuario subir fotos* 
- LabelComponent 
    *Componente con la interaccion con las etiquetas* 
- NavBar 
    *Barra para navegar: *AÑADIDLA A TODAS LAS VISTAS EN LAS QUE TENGA SENTIDO*
- Background
     *Efecto coloritos para el fondo* 

*Si no sabeis como usarlos, echadle un ojo a alguna de las vistas que he implementado ya* 

## SI TENEIS CUALQUIER PREGUNTITA PEQUEÑOS CHATGPT <3, o a muy malas me mandais un wasa ;)

## VISTAS A REALIZAR :

### PRIMERA RONDA
#### (*base de las vistas, falta pulirlar y conectarlas*) 
- ~~LogIn~~
- ~~SignUp~~
- ~~EditAccount~~
- ~~AddEntry~~
- ~~AddUser~~
- ~~UserProfile~~ 
- ~~Users~~
- ~~Dashboard~~
- ~~UserProfile~~
- ~~AccessLogs~~
- ~~AlertSettings~~
- ~~SystemEntry~~

- AccessAlerts
- SystemSettings
- EntryPoints


### 1º REVISIÓN 

- Añadir una web principal: logo + descripcion del proyecto, info del sistema + autores. 

-Log in 
    -estetica : OK 
    -resposive : OK 
    -logica de backend: FALTA 
    
- Sign up 
    -estetica : OK 
    -resposive : OK 
    -logica de backend: FALTA 
    
-Dashboard: 
    -estetica : FALTARIAN DETALLES 
    -resposive : OK 
    -logica de backend: OK
    
    
    
    
ESTETICA: 

ESTOY CAMBIANDO LOS COLORES: 

LOS GRISES : 
  background-color: #141414; 
  opacity: 0.8;
  
  alternartivamente : 
  background-color: #181c1c; 
  
  EL AZUL : color: #00c8c8;
  EL AMARILLO: color: #ff9800;
