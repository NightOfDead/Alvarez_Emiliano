insert into provincia (Provincia_Id, Nombre_provincia) values (001, "Formosa");
insert into provincia (Provincia_Id, Nombre_provincia) values (002, "Misiones");
insert into provincia (Provincia_Id, Nombre_provincia) values (003, "Santa_Fe");

insert into localidad (Codigo_localidad, Nombre, Codigo_Postal, Provincia_Id) values (01, "Posadas", 3300, 001);
insert into localidad (Codigo_localidad, Nombre, Codigo_Postal, Provincia_Id) values (02, "Posadas", 3330, 002);
insert into localidad (Codigo_localidad, Nombre, Codigo_Postal, Provincia_Id) values (03, "Posadas", 3340, 003);

insert into pais (Pais_Id, Nombre_Pais, Provincia_Id) values (1, "Argentina", 001);
insert into pais (Pais_Id, Nombre_Pais, Provincia_Id) values (2, "Brasil", 002);
insert into pais (Pais_Id, Nombre_Pais, Provincia_Id) values (3, "Chile", 003);

insert into empleado (Empleado_Id, Dni, Nombre, Telefono, Email, Fecha_Alta, Codigo_localidad) values (0001, 15696235, "Ponce", "3764258556", "Ponce@gmail.com", 12/01/2022, 01);
insert into empleado (Empleado_Id, Dni, Nombre, Telefono, Email, Fecha_Alta, Codigo_localidad) values (0002, 25654745, "Alvarez", "3764145696", "Alvarez@gmail.com", 02/06/2021, 02);
insert into empleado (Empleado_Id, Dni, Nombre, Telefono, Email, Fecha_Alta, Codigo_localidad) values (0003, 32585698, "Peralta", "3764366558", "Peralta@gmail.com", 05/11/2020, 03);

