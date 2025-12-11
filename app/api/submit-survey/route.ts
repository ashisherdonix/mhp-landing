import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const surveyData = await request.json();
    
    // Add server-side metadata
    const enhancedData = {
      ...surveyData,
      serverTimestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      country: request.headers.get('cf-ipcountry') || 'unknown'
    };

    // Save to Firebase using the admin SDK
    await saveToFirebase(enhancedData);

    return NextResponse.json({ 
      success: true, 
      message: 'Survey submitted successfully',
      id: enhancedData.id 
    });

  } catch (error) {
    console.error('Error saving survey:', error);
    return NextResponse.json(
      { success: false, message: `Failed to submit survey: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}

// Firebase Firestore integration
async function saveToFirebase(data: any) {
  const admin = require('firebase-admin');
  const path = require('path');
  const fs = require('fs');
  
  // Initialize Firebase Admin (only once)
  if (!admin.apps.length) {
    try {
      // Use emphio-certs.json file
      const serviceAccountPath = path.join(process.cwd(), 'emphio-certs.json');
      console.log('Looking for Firebase credentials at:', serviceAccountPath);
      
      if (!fs.existsSync(serviceAccountPath)) {
        throw new Error(`Firebase credentials file not found at: ${serviceAccountPath}`);
      }
      
      const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
      console.log('Firebase project ID:', serviceAccount.project_id);
      
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
      console.log('Firebase Admin initialized successfully');
    } catch (error) {
      console.error('Firebase initialization error:', error);
      throw error;
    }
  }
  
  const db = admin.firestore();
  
  try {
    // Get location from IP
    let location = null;
    try {
      if (data.ip && data.ip !== 'unknown' && data.ip !== '127.0.0.1') {
        const locationResponse = await fetch(`https://ipapi.co/${data.ip}/json/`);
        const locationData = await locationResponse.json();
        location = {
          city: locationData.city || 'Unknown',
          region: locationData.region || 'Unknown',
          country: locationData.country_name || 'Unknown',
          timezone: locationData.timezone || 'Unknown'
        };
      }
    } catch (error) {
      console.log('Could not fetch location:', error);
    }
    
    // Prepare document for Firestore
    const document = {
      ...data,
      location: location,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      submissionDate: new Date(data.timestamp).toLocaleDateString('en-IN'),
      submissionTime: new Date(data.timestamp).toLocaleTimeString('en-IN')
    };
    
    // Save to your 'survey' collection
    const docRef = await db.collection('survey').add(document);
    console.log(`Survey saved to Firebase with ID: ${docRef.id}`);
    
  } catch (error) {
    console.error('Error saving to Firebase:', error);
    throw error;
  }
}