const Model = require("./model");

const getAllUsers = async (req, res) => {
  try {
    const allRecords = await Model.find({});
    res.json(allRecords);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

const deleteUser = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send({ error: "Please provide an email to delete" });
  }

  try {
    const deleted = await Model.deleteOne({ email: email });

    if (deleted.deletedCount === 0) {
      res.status(404);
      throw new Error("User not found");
    } else {
      res.json({ message: "User deleted successfully" });
    }
  } catch (error) {
    console.error("Error storing/updating data in the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateUser = async (req, res) => {
  let { email, height, weight } = req.body;

  if (!height || !weight || !email) {
    return res.status(400).send({ error: "Missing necessary parameters" });
  }

  const heightInMeters = parseFloat((height * 0.3048).toFixed(2));

  const newBmi = Math.round(weight / (heightInMeters * heightInMeters));
  let newCategory = null;
  if (newBmi < 18.5) {
    newCategory = "Underweight";
  } else if (newBmi >= 18.5 && newBmi <= 24.9) {
    newCategory = "Normal weight";
  } else if (newBmi > 25.0) {
    newCategory = "Overweight";
  }

  try {
    const updatedRecord = await Model.findOneAndUpdate(
      { email: email },
      {
        $set: { bmi: newBmi, category: newCategory },
      },
      { new: true }
    );

    if (!updatedRecord) {
      res.status(404);
      throw new Error("User not found");
    } else {
      res.json(updatedRecord);
    }
  } catch (error) {
    console.error("Error storing/updating data in the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createUser = async (req, res) => {
  const { name, email, height, weight, age } = req.body;

  if (!height || !weight || !email) {
    return res.status(400).send({ error: "Missing parameters" });
  }

  const heightInMeters = parseFloat((height * 0.3048).toFixed(2));

  const newBmi = Math.round(weight / (heightInMeters * heightInMeters));
  let newCategory = null;
  if (newBmi < 18.5) {
    newCategory = "Underweight";
  } else if (newBmi >= 18.5 && newBmi <= 24.9) {
    newCategory = "Normal weight";
  } else if (newBmi > 25.0) {
    newCategory = "Overweight";
  }

  const response = {
    name: name,
    email: email,
    bmi: newBmi,
    age: age,
    category: newCategory,
    date: new Date(),
  };

  try {
    const existingRecord = await Model.findOne({ email });

    if (existingRecord) {
      console.log("Record already exists!");
      res.status(403).json({ existingRecord });
    } else {
      const newRecord = await Model.create(response);

      console.log("Record created in DB");
      res.status(201).send(newRecord);
    }
  } catch (error) {
    console.error("Error storing/updating data in the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllUsers, deleteUser, updateUser, createUser };
