import User from "../models/user.model";

import { connect } from "mongoose";

export const createOrUpdateUser = async(
    id,
    first_name,
    last_name,
    image_url,
    email_addresses,
    username
) => {
    try {
        await connect();

        const user = await User.findOneAndUpdate(
            { clerkId },
            {
                $set: {
                    firstName: first_name,
                    lastName: last_name,
                    profilePicture: image_url,
                    email: email_addresses[0].email_address,
                },
            }, {new: true, upsert: true}
        );
        return user
    } catch (error) {
        console.log("Error creating or updating user: ", error);
    }
}

export const deleteUser = async (id) => {
    try {
        await connnect;
        await User.findOneAndDelete({ clerkId: id});
    } catch (error) {
        console.log("Error deleting user: ", error)
    }
}