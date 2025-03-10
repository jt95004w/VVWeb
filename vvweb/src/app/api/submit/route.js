import fs from 'fs';
import path from 'path';

export async function POST(req) {
  const { email, message } = await req.json(); // Parse the incoming JSON request body

  const filePath = path.join(process.cwd(), 'public/jsons/Submission.json');

  try {
    // Read the existing submissions
    const data = fs.readFileSync(filePath, 'utf8');
    const submissions = JSON.parse(data || '[]');

    // Create a new submission
    const newSubmission = {
      id: Date.now(), // Use timestamp as a unique ID
      email,
      message,
    };

    // Add the new submission to the list
    submissions.push(newSubmission);

    // Write the updated submissions back to the JSON file
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2), 'utf8');

    // Respond with a success message
    return new Response(JSON.stringify({ message: 'Submission successful' }), { status: 200 });
  } catch (error) {
    console.error('Error handling submission:', error);
    return new Response(JSON.stringify({ message: 'Server error' }), { status: 500 });
  }
}