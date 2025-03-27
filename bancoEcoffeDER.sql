CREATE DATABASE ecoffee;
USE ecoffee;

-- Usuario
CREATE TABLE Usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    pontosAcumulados INT DEFAULT 0,
    dataCadastro DATE NOT NULL
);

-- Administrador
CREATE TABLE Administrador (
    idAdmin INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);


-- PontoColeta
CREATE TABLE PontoColeta (
    idPontoColeta INT AUTO_INCREMENT PRIMARY KEY,
    nomeLocal VARCHAR(100) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    tipoEstabelecimento VARCHAR(100) NOT NULL
);

-- Cápsula
CREATE TABLE Capsula (
    idCapsula INT AUTO_INCREMENT PRIMARY KEY,
    tipoMaterial VARCHAR(50) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    idUsuario INT NOT NULL,
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario) ON DELETE CASCADE
);

-- Recompensa
CREATE TABLE Recompensa (
    idRecompensa INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    pontosNecessarios INT NOT NULL,
    dataValidade DATE NOT NULL
);

-- Histórico de transação de cápsulas
CREATE TABLE Transacao (
    idTransacao INT AUTO_INCREMENT PRIMARY KEY,
    idUsuario INT NOT NULL,
    idRecompensa INT NOT NULL,
    dataTransacao DATE NOT NULL,
    quantidadeCapsulas INT NOT NULL,
    pontosGanhos INT NOT NULL,
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario) ON DELETE CASCADE,
    FOREIGN KEY (idRecompensa) REFERENCES Recompensa(idRecompensa) ON DELETE CASCADE
);

-- Relacionamentos entre tabelas
-- Atrelando o ponto de coleta e cápsulas depositadas
CREATE TABLE DepositoCapsula (
    idUsuario INT NOT NULL,
    idCapsula INT NOT NULL,
    idPontoColeta INT NOT NULL,
    PRIMARY KEY (idUsuario, idCapsula, idPontoColeta),
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario) ON DELETE CASCADE,
    FOREIGN KEY (idCapsula) REFERENCES Capsula(idCapsula) ON DELETE CASCADE,
    FOREIGN KEY (idPontoColeta) REFERENCES PontoColeta(idPontoColeta) ON DELETE CASCADE
);

-- Associação entre administradores e transações monitoradas
CREATE TABLE Monitoramento (
    idAdmin INT NOT NULL,
    idTransacao INT NOT NULL,
    PRIMARY KEY (idAdmin, idTransacao),
    FOREIGN KEY (idAdmin) REFERENCES Administrador(idAdmin) ON DELETE CASCADE,
    FOREIGN KEY (idTransacao) REFERENCES Transacao(idTransacao) ON DELETE CASCADE
);