insert into alumno (Cod_Matricula, Nombre, Dni, Fecha_Nac, Email) values (2110, "Jaime_Manija", 32256253, 24/12/2000, "ElMenosManija@gmail.com");
insert into alumno (Cod_Matricula, Nombre, Dni, Fecha_Nac, Email) values (2111, "Roberto_Perez", 41321656, 31/01/2002, "Roberto_24/7@gmail.com");
insert into alumno (Cod_Matricula, Nombre, Dni, Fecha_Nac, Email) values (2112, "Menganito_Fulgencio", 36954142, 12/12/2004, "menganito_fulgen@gmail.com");

insert into curso (Cod_Curso, Nombre) values (01, "Matematica");
insert into curso (Cod_Curso, Nombre) values (02, "Lengua");
insert into curso (Cod_Curso, Nombre) values (03, "Quimica");

insert into profesor (Profesor_Id, Nombre, Especialidad, Email) values (0001, "El_De_Quimica", "Quimica", "Yo_Soy_El_De_Quimica@gmail.com");
insert into profesor (Profesor_Id, Nombre, Especialidad, Email) values (0002, "El_De_Matematica", "Matematica", "Yo_Soy_El_De_Matematica@gmail.com");
insert into profesor (Profesor_Id, Nombre, Especialidad, Email) values (0003, "El_De_Lengua", "Lengua", "Yo_Soy_El_De_Lengua@gmail.com");

insert into impartido (Profesor_Id, Cod_Curso) values (0001, 03);
insert into impartido (Profesor_Id, Cod_Curso) values (0002, 01);
insert into impartido (Profesor_Id, Cod_Curso) values (0003, 02);

insert into inscripto (Cod_Matricula, Cod_Curso) values (2110, 01);
insert into inscripto (Cod_Matricula, Cod_Curso) values (2111, 02);
insert into inscripto (Cod_Matricula, Cod_Curso) values (2112, 03);