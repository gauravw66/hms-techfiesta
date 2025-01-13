CREATE TYPE b_type AS ENUM ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-');
CREATE TYPE g_type AS ENUM ('M', 'F', 'O');
CREATE TYPE doc_type AS ENUM ('imaging', 'laboratory', 'surgery', 'medication');

CREATE TABLE patient (
    id CHAR(36) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    sex g_type NOT NULL,
    dob DATE NOT NULL,
    aadhar BIGINT UNIQUE NOT NULL,
    pan VARCHAR(10) UNIQUE NOT NULL,
    address TEXT NOT NULL,
    phone BIGINT UNIQUE NOT NULL,
    emergency_phone BIGINT NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    initial_medical_history_done BOOLEAN DEFAULT FALSE
);

CREATE TABLE patient_token(
    id INT PRIMARY KEY,
    token VARCHAR NOT NULL,
    patient_id CHAR(36) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_patient FOREIGN KEY (patient_id) REFERENCES patient(id) ON DELETE CASCADE
);

CREATE TABLE initial_medical_history(
    id CHAR(36) PRIMARY KEY,
    patient_id CHAR(36) UNIQUE NOT NULL,
    blood_group b_type NOT NULL,
    height DOUBLE NOT NULL,
    weight DOUBLE NOT NULL,
    condition JSON NOT NULL,
    others TEXT DEFAULT 'NONE',
    CONSTRAINT fk_patient FOREIGN KEY (patient_id) REFERENCES patient(id) ON DELETE CASCADE
);

CREATE TABLE patient_documents(
    id INT PRIMARY KEY,
    patient_id CHAR(36) NOT NULL,
    document_type doc_type NOT NULL,
    document_link TEXT NOT NULL,
    hospital_id INT NOT NULL DEFAULT -1,
    doctor_id INT NOT NULL DEFAULT -1,
    CONSTRAINT fk_patient FOREIGN KEY (patient_id) REFERENCES patient(id) ON DELETE CASCADE
);

CREATE TABLE hospital(
    id INT PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE doctor(
    id INT PRIMARY KEY,
    name VARCHAR NOT NULL,
    domain VARCHAR NOT NULL,
    degree VARCHAR NOT NULL
);