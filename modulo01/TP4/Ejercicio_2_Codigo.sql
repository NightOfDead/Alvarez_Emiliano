CREATE TABLE Provincia
(
  Provincia_Id INT NOT NULL,
  Nombre_provincia VARCHAR(100) NOT NULL,
  PRIMARY KEY (Provincia_Id)
);

CREATE TABLE Localidad
(
  Codigo_localidad INT NOT NULL,
  Nombre VARCHAR(100) NOT NULL,
  Codigo_Postal INT NOT NULL,
  Provincia_Id INT NOT NULL,
  PRIMARY KEY (Codigo_localidad),
  FOREIGN KEY (Provincia_Id) REFERENCES Provincia(Provincia_Id),
  UNIQUE (Codigo_Postal)
);

CREATE TABLE Empleado
(
  Empleado_Id INT NOT NULL,
  Dni INT NOT NULL,
  Nombre VARCHAR(100) NOT NULL,
  Telefono VARCHAR(100) NOT NULL,
  Email VARCHAR(100) NOT NULL,
  Fecha_Alta date NOT NULL,
  Codigo_localidad INT NOT NULL,
  PRIMARY KEY (Empleado_Id),
  FOREIGN KEY (Codigo_localidad) REFERENCES Localidad(Codigo_localidad)
);

CREATE TABLE Pais
(
  Pais_Id INT NOT NULL,
  Nombre_Pais VARCHAR(100) NOT NULL,
  Provincia_Id INT NOT NULL,
  PRIMARY KEY (Pais_Id),
  FOREIGN KEY (Provincia_Id) REFERENCES Provincia(Provincia_Id),
  UNIQUE (Nombre_Pais)
);