const { MongoClient } = require("mongodb")

async function setupDatabase() {
  const client = new MongoClient(process.env.MONGODB_URI || "mongodb://localhost:27017/concertcircle")

  try {
    await client.connect()
    console.log("Connected to MongoDB")

    const db = client.db("concertcircle")

    // Create gigplans collection with validation
    await db.createCollection("gigplans", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["eventName", "artist", "date", "venue", "budget"],
          properties: {
            eventName: {
              bsonType: "string",
              minLength: 2,
              description: "Event name must be a string with at least 2 characters",
            },
            artist: {
              bsonType: "string",
              minLength: 2,
              description: "Artist name must be a string with at least 2 characters",
            },
            date: {
              bsonType: "date",
              description: "Date must be a valid date",
            },
            venue: {
              bsonType: "string",
              minLength: 2,
              description: "Venue must be a string with at least 2 characters",
            },
            budget: {
              bsonType: "string",
              description: "Budget must be a string",
            },
            preferences: {
              bsonType: "string",
              description: "Preferences must be a string",
            },
            from: {
              bsonType: "string",
              description: "From location must be a string",
            },
            departureDate: {
              bsonType: "date",
              description: "Departure date must be a valid date",
            },
            returningDate: {
              bsonType: "date",
              description: "Returning date must be a valid date",
            },
            crewSize: {
              bsonType: "string",
              description: "Crew size must be a string",
            },
            status: {
              bsonType: "string",
              enum: ["pending", "approved", "rejected"],
              description: "Status must be one of: pending, approved, rejected",
            },
            createdAt: {
              bsonType: "date",
              description: "Created date must be a valid date",
            },
            updatedAt: {
              bsonType: "date",
              description: "Updated date must be a valid date",
            },
          },
        },
      },
    })

    // Create indexes
    await db.collection("gigplans").createIndex({ createdAt: -1 })
    await db.collection("gigplans").createIndex({ eventName: "text", artist: "text", venue: "text" })

    console.log("Database setup completed successfully")
    console.log("Collections created: gigplans")
    console.log("Indexes created: createdAt, text search")
  } catch (error) {
    console.error("Error setting up database:", error)
  } finally {
    await client.close()
  }
}

setupDatabase()
