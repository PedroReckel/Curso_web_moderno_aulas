INSERT INTO Cidades (nome, area, estado_id)
VALUE ('Campinas', 795, 31)

INSERT INTO Cidades (nome, area, estado_id)
VALUE ('Niterói', 133.99, 25)

INSERT INTO Cidades (nome, area, estado_id)
VALUES ('Caruaru', 920.6, (SELECT ID FROM estados WHERE sigla = 'PE'))

INSERT INTO Cidades (nome, area, estado_id)
VALUES ('Serra', 500.5, (SELECT ID FROM estados WHERE sigla = 'ES'))