-- SQLBook: Code
-- Table: Doctor
CREATE TABLE Doctor (
    id SERIAL PRIMARY KEY, -- A unique identifier for the row
    doctor_id INTEGER NOT NULL UNIQUE, -- Unique ID for the doctor
    doctor_name TEXT NOT NULL, -- Name of the doctor
    qualification TEXT NOT NULL, -- Qualification of the doctor
    specialization TEXT NOT NULL, -- Specialization of the doctor
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Automatic creation timestamp
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Automatic update timestamp
);

-- Table: Hospital
CREATE TABLE Hospital (
    id SERIAL PRIMARY KEY, -- A unique identifier for the row
    hospital_id INTEGER NOT NULL UNIQUE, -- Unique ID for the hospital
    hospital_name TEXT NOT NULL, -- Name of the hospital
    location TEXT NOT NULL, -- Location of the hospital
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Automatic creation timestamp
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Automatic update timestamp
);

-- Table: Patient
CREATE TABLE Patient (
    id SERIAL PRIMARY KEY, -- A unique identifier for the row
    patient_id INTEGER NOT NULL UNIQUE, -- Unique ID for the patient
    patient_name TEXT NOT NULL, -- Name of the patient
    date_of_birth DATE NOT NULL, -- Date of birth
    sex TEXT NOT NULL, -- Gender
    aadhar_pan TEXT NOT NULL, -- Aadhar or PAN number
    address TEXT, -- Address (optional)
    email TEXT NOT NULL, -- Email
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Automatic creation timestamp
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Automatic update timestamp
);

-- Table: Medical_History
CREATE TABLE Medical_History (
    id SERIAL PRIMARY KEY, -- A unique identifier for the record
    patient_id INTEGER NOT NULL REFERENCES Patient(patient_id) ON DELETE CASCADE, -- Patient ID as a foreign key
    filename TEXT NOT NULL, -- File name
    content TEXT NOT NULL, -- Content of the medical history
    data BYTEA NOT NULL -- Binary data for medical history files
);

-- Table: Emergency_Contact
CREATE TABLE Emergency_Contact (
    id SERIAL PRIMARY KEY, -- A unique identifier for the contact
    patient_id INTEGER NOT NULL REFERENCES Patient(patient_id) ON DELETE CASCADE, -- Patient ID as a foreign key
    emergency_contact_name TEXT NOT NULL, -- Emergency contact name
    emergency_contact_number TEXT NOT NULL -- Emergency contact number
);

-- Table: Doctor_Hospital
CREATE TABLE Doctor_Hospital (
    id SERIAL PRIMARY KEY, -- A unique identifier for the row
    doctor_id INTEGER NOT NULL REFERENCES Doctor(doctor_id) ON DELETE CASCADE, -- Foreign key to Doctor table
    hospital_id INTEGER NOT NULL REFERENCES Hospital(hospital_id) ON DELETE CASCADE, -- Foreign key to Hospital table
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Automatic creation timestamp
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Automatic update timestamp
    UNIQUE (doctor_id, hospital_id) -- Ensures unique pair of doctor and hospital
);

-- Table: Doctor_Patient
CREATE TABLE Doctor_Patient (
    id SERIAL PRIMARY KEY, -- A unique identifier for the row
    diagnosis TEXT NOT NULL, -- Diagnosis information
    treatment_date DATE NOT NULL, -- Treatment date
    patient_id INTEGER NOT NULL REFERENCES Patient(patient_id) ON DELETE CASCADE, -- Foreign key to Patient table
    doctor_id INTEGER NOT NULL REFERENCES Doctor(doctor_id) ON DELETE CASCADE, -- Foreign key to Doctor table
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Automatic creation timestamp
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Automatic update timestamp
    UNIQUE (patient_id, doctor_id) -- Ensures unique pair of patient and doctor
);

-- Table: Hospital_Patient
CREATE TABLE Hospital_Patient (
    id SERIAL PRIMARY KEY, -- A unique identifier for the row
    admission_date DATE NOT NULL, -- Admission date of the patient
    release_date DATE NOT NULL, -- Release date of the patient
    patient_id INTEGER NOT NULL REFERENCES Patient(patient_id) ON DELETE CASCADE, -- Foreign key to Patient table
    hospital_id INTEGER NOT NULL REFERENCES Hospital(hospital_id) ON DELETE CASCADE, -- Foreign key to Hospital table
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Automatic creation timestamp
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Automatic update timestamp
    UNIQUE (patient_id, hospital_id) -- Ensures unique pair of patient and hospital
);

-- Trigger to update `updated_at` column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for tables
CREATE TRIGGER set_updated_at BEFORE UPDATE ON Doctor FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON Hospital FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON Patient FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON Doctor_Hospital FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON Doctor_Patient FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON Hospital_Patient FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
