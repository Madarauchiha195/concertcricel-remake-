import mongoose from "mongoose"

const GigPlanSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: [true, "Event name is required"],
      minlength: [2, "Event name must be at least 2 characters long"],
      trim: true,
    },
    artist: {
      type: String,
      required: [true, "Artist name is required"],
      minlength: [2, "Artist name must be at least 2 characters long"],
      trim: true,
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
    venue: {
      type: String,
      required: [true, "Venue is required"],
      minlength: [2, "Venue must be at least 2 characters long"],
      trim: true,
    },
    budget: {
      type: String,
      required: [true, "Budget is required"],
      enum: ["under-500", "500-1000", "1000-2000", "2000-5000", "over-5000"],
    },
    preferences: {
      type: String,
      trim: true,
    },
    from: {
      type: String,
      trim: true,
    },
    departureDate: {
      type: Date,
    },
    returningDate: {
      type: Date,
    },
    crewSize: {
      type: Number,
      min: [1, "Crew size must be at least 1"],
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
)

// Create text index for search
GigPlanSchema.index({
  eventName: "text",
  artist: "text",
  venue: "text",
})

export default mongoose.models.GigPlan || mongoose.model("GigPlan", GigPlanSchema)
