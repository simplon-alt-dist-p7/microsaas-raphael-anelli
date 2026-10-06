-- Drop schema if they exist 
-- On supprime le schema "registres" et son contenu pour être sûr de partir sur une base saine

DROP schema IF EXISTS registres CASCADE;
CREATE schema registres;

-- ============================================
-- TABLE: roles
-- ============================================

CREATE TABLE roles (
    id_role SERIAL PRIMARY KEY,
    nom_role VARCHAR(20) NOT NULL UNIQUE
);