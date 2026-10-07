-- Drop schema if they exist 
-- On supprime le schema "registres" et son contenu pour être sûr de partir sur une base saine

DROP schema IF EXISTS registres CASCADE;
CREATE schema registres;

-- ============================================
-- TABLE: role
-- ============================================

CREATE TABLE registres.role (
    id_role SERIAL PRIMARY KEY,
    nom_role VARCHAR(20) NOT NULL UNIQUE
);

-- ============================================
-- TABLE: utilisateur
-- ============================================

CREATE TABLE registres.utilisateur (
    id_utilisateur SERIAL PRIMARY KEY,
    uid_utilisateur VARCHAR(15) NOT NULL UNIQUE,
    prenom_utilisateur VARCHAR(60) NOT NULL,
    nom_utilisateur VARCHAR(80) NOT NULL,
    pseudonyme_utilisateur VARCHAR(50) NOT NULL UNIQUE,
    email_utilisateur VARCHAR(80) NOT NULL UNIQUE,
    mot_de_passe_utilisateur VARCHAR(255) NOT NULL,
    est_active_utilisateur BOOLEAN NOT NULL,
    id_role INT NOT NULL,
    CONSTRAINT fk_utilisateur_role
        FOREIGN KEY (id_role)
        REFERENCES registres.role(id_role)
);

-- ============================================
-- TABLE: univers
-- ============================================

CREATE TABLE registres.univers (
    id_univers SERIAL PRIMARY KEY,
    nom_univers VARCHAR(50) NOT NULL UNIQUE
);

-- ============================================
-- TABLE: environnement
-- ============================================

CREATE TABLE registres.environnement (
    id_environnement SERIAL PRIMARY KEY,
    type_environnement VARCHAR(30) NOT NULL UNIQUE
);

-- ============================================
-- TABLE: espece
-- ============================================

CREATE TABLE registres.espece (
    id_espece SERIAL PRIMARY KEY,
    type_espece VARCHAR(30) NOT NULL UNIQUE
);

-- ============================================
-- TABLE: espece
-- ============================================

CREATE TABLE registres.creature (
    id_creature SERIAL PRIMARY KEY,
    uid_creature VARCHAR(15) NOT NULL UNIQUE,
    nom_creature VARCHAR(50) NOT NULL UNIQUE,
    description_creature TEXT NOT NULL,
    lien_image_creature VARCHAR(100) NOT NULL,
    alt_image_creature VARCHAR(80) NOT NULL,
    id_utilisateur INT NOT NULL,
    id_espece INT NOT NULL,
    CONSTRAINT fk_creature_utilisateur
        FOREIGN KEY (id_utilisateur)
        REFERENCES registres.utilisateur(id_utilisateur),
    CONSTRAINT fk_creature_espece
        FOREIGN KEY (id_espece)
        REFERENCES registres.espece(id_espece)
);

-- ============================================
-- TABLE RELATIONNELLE : creature/environnement
-- ============================================

CREATE TABLE registres.relation_creature_environnement (
    id_creature INT NOT NULL,
    id_environnement INT NOT NULL,
    CONSTRAINT pk_relation_creature_environnement PRIMARY KEY (id_creature, id_environnement),
    CONSTRAINT fk_relation_creature_environnement_creature
        FOREIGN KEY (id_creature)
        REFERENCES registres.creature(id_creature),
    CONSTRAINT fk_relation_creature_environnement_environnement
        FOREIGN KEY (id_environnement)
        REFERENCES registres.environnement(id_environnement)
);

-- ============================================
-- TABLE RELATIONNELLE : creature/univers
-- ============================================

CREATE TABLE registres.relation_creature_univers (
    id_creature INT NOT NULL,
    id_univers INT NOT NULL,
    CONSTRAINT pk_relation_creature_univers PRIMARY KEY (id_creature, id_univers),
    CONSTRAINT fk_relation_creature_univers_creature
        FOREIGN KEY (id_creature)
        REFERENCES registres.creature(id_creature),
    CONSTRAINT fk_relation_creature_univers_univers
        FOREIGN KEY (id_univers)
        REFERENCES registres.environnement(id_univers)
);


-- ============================================
-- INSERT : données fixes
-- ============================================

INSERT INTO registres.role(nom_role) VALUES
('Administrateur'),
('Maître du jeu');

INSERT INTO registres.environnement(type_environnement) VALUES
('Foret'),
('Urbain'),
('Grotte'),
('Souterrain'),
('Montagne'),
('Désert'),
('Aquatique'),
('Espace');

INSERT INTO registres.espece(type_espece) VALUES
('Humanoïde'),
('Bête'),
('Bestiole'),
('Aberration'),
('Monstruosité'),
('Dragon'),
('Géant'),
('Mort-vivant'),
('Céleste'),
('Créature artificielle'),
('Élémentaire'),
('Fée'),
('Démon'),
('Diable'),
('Vase'),
('Plante'),
('Alien');

INSERT INTO registres.univers(nom_univers) VALUES 
('Dungeons & Dragons - 5e édition'),
('Call of Cthulhu'),
('Alien - Le jeu de rôle'),
('Vampire - La mascarade')