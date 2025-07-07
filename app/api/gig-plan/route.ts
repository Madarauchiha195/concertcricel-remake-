import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import GigPlan from "@/models/GigPlan"

// POST route - Create new gig plan
export async function POST(request: NextRequest) {
  try {
    await connectDB()

    const body = await request.json()

    // Create new gig plan
    const gigPlan = new GigPlan(body)
    await gigPlan.save()

    return NextResponse.json(
      {
        message: "Gig plan created successfully",
        gigPlan,
      },
      { status: 201 },
    )
  } catch (error: any) {
    console.error("Error creating gig plan:", error)

    // Handle validation errors
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err: any) => err.message)
      return NextResponse.json({ error: "Validation failed", details: errors }, { status: 400 })
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// GET route - Retrieve gig plans
export async function GET(request: NextRequest) {
  try {
    await connectDB()

    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const skip = (page - 1) * limit

    // Get total count
    const total = await GigPlan.countDocuments()

    // Get paginated results
    const gigPlans = await GigPlan.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit).lean()

    return NextResponse.json({
      gigPlans,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching gig plans:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
