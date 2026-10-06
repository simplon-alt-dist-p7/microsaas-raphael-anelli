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
-- TABLE: role
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