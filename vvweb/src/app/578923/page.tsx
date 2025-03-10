import React from 'react';
import { submissions as importedSubmissions } from '../../../public/jsons/Submission.json';

interface Submission {

    id: number;
    email: string;
    message: string;

}

export default function Secrets() {

    return (

        <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Form Submissions</h1>
            <div className="space-y-6">
                {importedSubmissions.map((submission: Submission) => (
                <div
                    key={submission.id}
                    className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-white hover:text-black transition-all duration-300"
                >
                    <p className="text-gray-700 mt-2">{submission.id}</p>
                    <h2 className="text-xl font-semibold">{submission.email}</h2>
                    <p className="text-gray-700 mt-2">{submission.message}</p>
                </div>
                ))}
            </div>
        </div>

    )

}