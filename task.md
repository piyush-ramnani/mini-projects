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

# STEPS:

1. Make a collection in MongoDB
2. Add user data {age, BMI}
3. Create an express server for BMI calculation API
4. function to calculate BMI (KG/m^2);
   1 ft = 1/3.281 m
   3 categories (m, ft, inches)
5. Input validation - check if in Number
6. Calculate and store the value and category in the DB
7. User can access all previous calculations, make changes and update it in the table
8. Error handling.

# APIs:

- Make an entry in the DB : POST
- Access all entries : GET
- Update entries : PUT

---

[db.js]

- connected to DB via mongoose
- URI as env variable
