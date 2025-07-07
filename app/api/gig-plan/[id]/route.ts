import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import GigPlan from "@/models/GigPlan"
import mongoose from "mongoose"

// GET route - Retrieve specific gig plan
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB()

    const { id } = params

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid gig plan ID" }, { status: 400 })
    }

    // Find gig plan
    const gigPlan = await GigPlan.findById(id).lean()

    if (!gigPlan) {
      return NextResponse.json({ error: "Gig plan not found" }, { status: 404 })
    }

    return NextResponse.json({ gigPlan })
  } catch (error) {
    console.error("Error fetching gig plan:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// PUT route - Update specific gig plan
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB()

    const { id } = params
    const body = await request.json()

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid gig plan ID" }, { status: 400 })
    }

    // Update gig plan
    const gigPlan = await GigPlan.findByIdAndUpdate(id, body, { new: true, runValidators: true })

    if (!gigPlan) {
      return NextResponse.json({ error: "Gig plan not found" }, { status: 404 })
    }

    return NextResponse.json({
      message: "Gig plan updated successfully",
      gigPlan,
    })
  } catch (error: any) {
    console.error("Error updating gig plan:", error)

    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err: any) => err.message)
      return NextResponse.json({ error: "Validation failed", details: errors }, { status: 400 })
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// DELETE route - Delete specific gig plan
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB()

    const { id } = params

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid gig plan ID" }, { status: 400 })
    }

    // Delete gig plan
    const gigPlan = await GigPlan.findByIdAndDelete(id)

    if (!gigPlan) {
      return NextResponse.json({ error: "Gig plan not found" }, { status: 404 })
    }

    return NextResponse.json({
      message: "Gig plan deleted successfully",
    })
  } catch (error) {
    console.error("Error deleting gig plan:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
