'use client';

import { useState } from 'react';

export default function CreateIssue(): JSX.Element {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    const issueData = {
      title: title,
      description: description,
    };

    try {
      const response = await fetch('/api/create-issue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(issueData),
      });

      if (!response.ok) {
        throw new Error('Failed to create issue');
      }

      const data = await response.json();
      setSuccess('Issue created successfully!');
      console.log('Issue created:', data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-lg text-black text-center">
      <h2 className="text-2xl font-bold mb-4">Create New Issue</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col justify-center">
          <label htmlFor="title" className="text-gray-800">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            required
            className="border border-gray-300 p-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="text-gray-800">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(e.target.value)
            }
            required
            className="border border-gray-300 p-2 rounded-lg"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          {isLoading ? 'Creating...' : 'Create Issue'}
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </div>
  );
}
