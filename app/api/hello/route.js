import mongoose from "mongoose";
// Define the Course schema
const courseSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    courseDescription: String,
    price: Number,
    imageUrl: String,
  },
  { timestamps: true }
);

// Create the Course model
const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);

// Function to connect to MongoDB
const connectDb = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

   // Ensure you have this in your .env.local
  return mongoose.connect("mongodb+srv://sangammunde3:69ZEogw3grwMXHyk@cluster0.7e0zod4.mongodb.net/course-selling");
};

export async function GET() {
  try {
    await connectDb(); // Connect to MongoDB

    const courses = await Course.find({}); // Fetch all courses

    return new Response(
      JSON.stringify({ message: 'Hello from the API!',course: courses }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Error connecting to MongoDB', error }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
