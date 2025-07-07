const { MongoClient } = require("mongodb")

async function testConnection() {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/concertcircle"

  console.log("Testing MongoDB connection...")
  console.log("URI:", uri.replace(/\/\/.*@/, "//***:***@")) // Hide credentials in log

  const client = new MongoClient(uri)

  try {
    await client.connect()
    console.log("✅ Successfully connected to MongoDB!")

    // Test database operations
    const db = client.db("concertcircle")
    const collections = await db.listCollections().toArray()
    console.log(
      "📁 Available collections:",
      collections.map((c) => c.name),
    )

    // Test write operation
    const testCollection = db.collection("test")
    const result = await testCollection.insertOne({
      test: true,
      timestamp: new Date(),
      message: "Connection test successful",
    })
    console.log("✍️  Test write successful, ID:", result.insertedId)

    // Clean up test document
    await testCollection.deleteOne({ _id: result.insertedId })
    console.log("🧹 Test cleanup completed")
  } catch (error) {
    console.error("❌ Connection failed:", error.message)

    if (error.message.includes("authentication failed")) {
      console.log("💡 Check your username and password in the connection string")
    } else if (error.message.includes("ENOTFOUND")) {
      console.log("💡 Check your internet connection and cluster URL")
    } else if (error.message.includes("IP not whitelisted")) {
      console.log("💡 Add your IP address to MongoDB Atlas Network Access")
    }
  } finally {
    await client.close()
    console.log("🔌 Connection closed")
  }
}

testConnection()
