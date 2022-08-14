CREATE DATABASE grim;


CREATE TABLE categorias(
    id_categoria varchar(5) PRIMARY KEY,
    nombre varchar (30)
);


CREATE TABLE prdocutos (
    sku varchar(10) PRIMARY KEY,
    nombre varchar(50),
    id_categoria varchar(5),
    descripcion varchar (200),
    imagen longblob,
    precio int

    ALTER TABLE `productos` ADD CONSTRAINT `categoria`
    FOREIGN KEY (`id_categoria`) REFERENCES `categorias`(`id_categoria`) 
    ON DELETE CASCADE ON UPDATE CASCADE;
);