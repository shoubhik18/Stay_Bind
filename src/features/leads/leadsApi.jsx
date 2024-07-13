import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const submitLead = createAsyncThunk('leads/submitLead', async (lead) => {
  const response = await fetch(`http://localhost:5432/api/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(lead),
  });
  if (!response.ok) {
    // toast.error('Failed to submit lead')
    throw new Error('Failed to submit lead');
  }
  // Return the response to maintain the thunk flow
  const data = await response.json();
  // toast.success('Lead Signed Up Successfully !!')
  return data;
});
