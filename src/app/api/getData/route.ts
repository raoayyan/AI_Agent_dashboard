// app/api/getdata/route.js

import { NextRequest, NextResponse } from 'next/server';

function generateRandomCallData() {
  const callId = `CALL${Math.floor(1000 + Math.random() * 9000)}`;
  const taskCompleted = Math.random() < 0.5;
  const salesConversion = Math.random() < 0.5;
  const call_handle_by = Math.random() < 0.7 ? "AI Agent" : "Human Agent";
  const duration = Math.floor(Math.random() * 15) + 1;
  return {
    callId,
    taskCompleted,
    salesConversion,
    call_handle_by,
    duration
  };
}

export async function POST(request:NextRequest) {
  try {
    const randomCallData = generateRandomCallData();
    return NextResponse.json(randomCallData, { status: 200 });
  } catch (error) {
    console.error('Error generating random call data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}