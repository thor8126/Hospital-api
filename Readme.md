
# thunder-collection_Hospital.json
1- Please find the thunder-collection_Hospital.json file in the root directory of this repository.
2- All the GET, POST, PUT, DELETE requests for the thunder-collection_Hospital.json


#  Setup Instructions
1- Install Node.js
2- Install Postman or any other API testing tool
3- Clone the repository
4- Open the terminal and navigate to the root directory of the repository
5- Run the command `npm install` to install all the dependencies
6- Run the command `npm start` to start the server
7- Open Postman and import the thunder-collection_Hospital.json file(or any other API testing tool)
8- Run the requests in the thunder-collection_Hospital.json file
 
#  Note:-
I've used MongoDb Atlas for the database. So, you need to create a cluster in MongoDb Atlas and add the connection string in the .env file. 
                                            or
You can use your local database by adding the connection string in the .env file.

#  API Endpoints
1- GET /api/doctors/register -           Register a doctor  (name,username,password)
2- POST /api/doctors/login -             Login a doctor  (username,password)
3- GET /api/doctors/logout -             Logout a doctor
4- POST /api/patients/register -         Register a patient(name,phone(primary_key))
5- GET /api/patients/:id/all_reports -   Get all reports of a specific patient(patient_id)
6- POST /api/reports/:id/create_report-  Create a report of a patient
7- GET /api/reports/:status  -           GET all reports related to specific Status['Negative','Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit']

