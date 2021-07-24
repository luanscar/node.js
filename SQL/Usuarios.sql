CREATE TABLE usuarios (
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

usar o banco: use 'nome do nome'
detalhar tabela: DESCRIBE 'nome da tabela'
inserir dados na tabela:
INSERT INTO usuarios(nome, email, idade) VALUES('Luan Araujo', 'luanscar@live.com', 22);
listar com uma condição:
SELECT * FROM  usuarios WHERE idade = 8;