import fs from 'fs';
import path from 'path';

const generateReadableId = () => {
    const now = new Date();
    return now.toISOString(); // Generates a string like "2025-03-09T10:15:30.000Z"
}

export async function POST(req) {
    const { email, message } = await req.json(); // Parse the incoming JSON request body

    const filePath = path.join(process.cwd(), 'public/jsons/Submission.json');

    try {
        // Read the existing submissions
        const data = fs.readFileSync(filePath, 'utf8');
        const jsonObject = JSON.parse(data || '[]');
        const submissions = jsonObject["submissions"];

        // Create a new submission
        const newSubmission = {
            id: generateReadableId(),
            email,
            message,
        };

        // Add the new submission to the list
        submissions.push(newSubmission);

        // Write the updated submissions back to the JSON file
        fs.writeFileSync(filePath, JSON.stringify(jsonObject, null, 2), 'utf8');

        // Respond with a success message
        return new Response(JSON.stringify({ message: 'Submission successful' }), { status: 200 });
    } catch (error) {
        console.error('Error handling submission:', error);
        return new Response(JSON.stringify({ message: 'Server error' }), { status: 500 });
    }
}