import { connectDB } from "@/lib/mongoose";
import { NextResponse } from "next/server";
import User from "@/models/User";

export async function PUT(req,{params}){
    try{
        await connectDB();

        const {id} = await params;

        const body = await req.json();

        const updatedUser = await User.findByIdAndUpdate(
            id,
            body,
            {new:true}
        );

        return NextResponse.json({
            message:"User Updated successfully",
            data: updatedUser
        })
    }catch (err) {
    return NextResponse.json({
      message: "Error Updating User",
      error: err.message,
    });
  }
}

export async function DELETE(req,{params}){
    try{
        await connectDB();

        const {id} = await params;

        const deletedUser = await User.findByIdAndDelete(id);

        return NextResponse.json({
            message:"User Deleted Successfully",
            data:deletedUser
        })
    }catch (err) {
    return NextResponse.json({
      message: "Error deleting User",
      error: err.message,
    });
  }  
}