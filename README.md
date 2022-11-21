# AprioriBeisbol

Adnán Abdul Khalek 27.750.460
Jesus Perez 27.637.523
Jesus Fernandez
Johnny L.

npm install
npm install pg
npm install lodash

create table jugador(      
id_jugador serial primary key,
    nombre varchar(200),
    lastname varchar(200),
    team varchar(200)
);

create table carrera(     receipt
id_carrera serial primary key,
    fecha varchar(200),
    carrera varchar(200),
    id_jugador int,
    FOREIGN KEY (id_jugador) references jugador
)

create table pitcher(     product
id_pitcher serial primary key,
    nombre varchar(200),
    lastname varchar(200),
    team varchar(200)
)

create table estadistica(    sale
id_carrera int,
    FOREIGN KEY(id_carrera) references carrera,
    id_pitcher int,
    FOREIGN KEY (id_pitcher) references pitcher,
    Cantidad int 
);
