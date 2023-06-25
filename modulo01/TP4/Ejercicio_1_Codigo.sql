CREATE TABLE Alumno
(
  Cod_Matricula INT NOT NULL,
  Nombre VARCHAR(100) NOT NULL,
  Dni INT NOT NULL,
  Fecha_Nac date NOT NULL,
  Email VARCHAR(100) NOT NULL,
  PRIMARY KEY (Cod_Matricula)
);

CREATE TABLE Curso
(
  Cod_Curso INT NOT NULL,
  Nombre VARCHAR(100) NOT NULL,
  PRIMARY KEY (Cod_Curso)
);

CREATE TABLE Profesor
(
  Profesor_Id INT NOT NULL,
  Nombre VARCHAR(100) NOT NULL,
  Especialidad VARCHAR(100) NOT NULL,
  Email VARCHAR(100) NOT NULL,
  PRIMARY KEY (Profesor_Id)
);

CREATE TABLE Inscripto
(
  Cod_Matricula INT NOT NULL,
  Cod_Curso INT NOT NULL,
  PRIMARY KEY (Cod_Matricula, Cod_Curso),
  FOREIGN KEY (Cod_Matricula) REFERENCES Alumno(Cod_Matricula),
  FOREIGN KEY (Cod_Curso) REFERENCES Curso(Cod_Curso)
);

CREATE TABLE Impartido
(
  Profesor_Id INT NOT NULL,
  Cod_Curso INT NOT NULL,
  PRIMARY KEY (Profesor_Id, Cod_Curso),
  FOREIGN KEY (Profesor_Id) REFERENCES Profesor(Profesor_Id),
  FOREIGN KEY (Cod_Curso) REFERENCES Curso(Cod_Curso)
);