// utils/api.ts

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

// Send a message to the chatbot
export async function sendChatMessage(message: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/chat/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, collection_name: 'default_collection' }),
    });

    if (!res.ok) throw new Error('Failed to send chat message');
    const data = await res.json();
    return data.message;
  } catch (err) {
    console.error(err);
    return null;
  }
}

// Trigger processing a directory
export async function processDirectory(path: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/chat/process-directory`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ path }),
    });

    if (!res.ok) throw new Error('Failed to process directory');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
