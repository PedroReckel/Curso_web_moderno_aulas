INSERT INTO empresas 
    (nome, cnpj)
VALUE
    ('Bradesco', 74614873000120),
    ('Vale', 22491735000106),
    ('TOTVS', 38354193000151);

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);