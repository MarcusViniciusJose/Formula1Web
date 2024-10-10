create database f1pweb;

use f1pweb;

create table usuarios(
usuario_id int not null auto_increment,
nome varchar(45) not null,
usuario varchar(45) not null,
senha varchar(45) not null,
primary key(usuario_id));

create table piloto(
piloto_id int not null auto_increment,
nome varchar(45) not null,
pontuacao int(10) not null,
equipe varchar(45) not null,
vitorias int(10) not null,
podiums int(10) not null,
usuario_id int not null,
primary key(piloto_id));

alter table piloto add constraint fk_Piloto_Usuario foreign key(usuario_id) references usuarios(usuario_id);


insert into usuarios(nome, usuario, senha) values ('Marcus José', 'Marcus', 'Senha123');

insert into piloto(nome, pontuacao, equipe, vitorias, podiums, usuario_id) values ('Max Verstappen', 450, 'RedBull', 95, 200, 1 );

select * from piloto;
