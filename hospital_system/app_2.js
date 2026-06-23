let patients = [];

console.log("\n                                      HOSPITAL MANAGEMENT SYSTEM \n");
//Add patients
function addPatient (id, name, age, disease){
  patients.push({id, name, age, disease, doctor: "Not assigned"});
  console.log(`Admitted: ${name}`);
}
// Assign a doctor
function assignDoctor(id, doctorName) {
  let patient = patients.find((p) => p.id === id);

  if (patient) {
    patient.doctor = doctorName;
    console.log(`${doctorName} is now treating ${patient.name}`);
  } else {
    console.log("Patient not found.");
  }
}

// Display all patients
function showPatients() {
  console.log("\n--- Patient Records ---");

  patients.forEach((patient) => {
    console.log(
      `ID: ${patient.id}, Name: ${patient.name}, Age: ${patient.age}, Disease: ${patient.disease}, Doctor: ${patient.doctor}`
    );
  });
}
// Discharge a patient
function dischargePatient(id) {
  let patientIndex = patients.findIndex((p) => p.id === id);

  if (patientIndex !== -1) {
    let removed = patients.splice(patientIndex, 1);
    console.log(`Discharged: ${removed[0].name}`);
  } else {
    console.log("Patient not found.");
  }
}

addPatient(1, "Nobita", 12, "Fever");
addPatient(2, "Doraemon", 15, "Stomach Infection");
addPatient(3, "Gian", 14, "Fracture");

assignDoctor(1, "Dr. Shizuka");
assignDoctor(2, "Dr. Dekisugi");
assignDoctor(3, "Dr. Shizuka");

showPatients();
dischargePatient(2);
showPatients();