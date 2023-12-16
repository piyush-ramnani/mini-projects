# TASK:

1. Using MongoDB: Use MongoDB to store data and show how to add, read, update, and delete data.
2. Create a REST API using Express.js to develop a BMI (Body Mass Index) calculator. The API should accept user input for weight and height, perform the BMI calculation, and return a result indicating whether the person is overweight, underweight, or fit. Additionally, implement validation to ensure that the provided inputs are valid.
3. Handle Errors: Be sure to manage errors well and keep track of them.

What We're Looking For:

- Good, clear, and efficient code.
- A system that can handle growth and works well.
- Strong security practices in using Node.js and MongoDB.

How to Submit:

Please finish the challenge and send it to us by 17th Dec. Put your code on GitHub and share the link with us.

---

# Required

- NodeJS
- ExpressJS
- Mongoose
- nodemon
- POSTMAN

---

# APIs:

- Make an entry in the DB
  POST ("/calculate") | { name, email, height, weight, age }

- Access all entries
  GET ("/get-all") | {}

- Update entries
  PUT ("/update") | { email, height, weight }

- Delete an entry
  DELETE ("/delete") | { email }

---

# Environment Variables in use

- PORT: XXXX
- MONGO_URI: XXXXXXXXXXXXXXXXXXX

---

# Start application

- npm run start

---
