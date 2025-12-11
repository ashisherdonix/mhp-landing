# 📊 Google Sheets Integration Setup Guide

## ✅ What's Already Done:
- ✅ Google Sheets package installed
- ✅ API endpoint configured for your sheet: `1aH9uRPAISVppYoRCZ5-rMsa2musTWnrHEQQ9oLS6JfI`
- ✅ Enhanced data capture: Date, Time, IP Address, Location
- ✅ Automatic header setup for new sheets

## 🔑 YOU NEED TO DO (5 minutes):

### Step 1: Create Google Service Account
1. **Go to:** [Google Cloud Console](https://console.cloud.google.com/)
2. **Create/Select Project:** Any name (e.g., "Emphio Survey")
3. **Enable Sheets API:**
   - Go to "APIs & Services" → "Library" 
   - Search "Google Sheets API" → Enable

### Step 2: Create Service Account
1. **Go to:** "APIs & Services" → "Credentials"
2. **Click:** "Create Credentials" → "Service Account"
3. **Name:** `emphio-survey-service`
4. **Click:** "Create and Continue"
5. **Skip** role assignment (Click "Continue")
6. **Click:** "Done"

### Step 3: Generate Key
1. **Click on** your service account email
2. **Go to:** "Keys" tab
3. **Click:** "Add Key" → "Create New Key"
4. **Choose:** JSON format
5. **Download** the JSON file

### Step 4: Share Google Sheet
1. **Open your sheet:** [Your Sheet Link](https://docs.google.com/spreadsheets/d/1aH9uRPAISVppYoRCZ5-rMsa2musTWnrHEQQ9oLS6JfI/edit)
2. **Click:** "Share" button
3. **Add** the service account email (from JSON file: `client_email`)
4. **Set permission:** "Editor"
5. **Click:** "Send" (uncheck "Notify people")

### Step 5: Update Environment Variables
1. **Open:** `.env.local` file in your project
2. **Replace** with values from your downloaded JSON:

```bash
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour_actual_private_key_here\n-----END PRIVATE KEY-----\n"
```

**⚠️ IMPORTANT:** 
- Keep the quotes around the private key
- Don't share the `.env.local` file publicly
- The private key should include `\n` characters

## 📋 Data Captured:

Your Google Sheet will automatically capture:

| Column | Description | Example |
|--------|-------------|---------|
| `id` | Unique survey ID | `survey_1703123456789_abc123` |
| `submission_date` | Date submitted | `12/21/2024` |
| `submission_time` | Time submitted | `2:30:45 PM` |
| `submission_datetime` | Full timestamp | `21/12/2024, 14:30:45` |
| `role` | User role | `student`, `parent`, `teacher` |
| `ip_address` | User IP address | `203.192.xxx.xxx` |
| `location` | City, State, Country | `Mumbai, Maharashtra, India` |
| `user_agent` | Browser info | `Mozilla/5.0...` |
| `class_level` | Student class | `Secondary (9-10)` |
| `school_type` | School type | `Private` |
| `body_safety` | Array of responses | `["Body changes...", "Peer pressure..."]` |
| ... | All other survey questions | ... |

## 🧪 Test the Setup:

1. **Build the project:** `npm run build`
2. **Start dev server:** `npm run dev`
3. **Go to:** `http://localhost:3000/survey`
4. **Complete a test survey**
5. **Check your Google Sheet** for the new row!

## 🔧 Troubleshooting:

**Error: "The caller does not have permission"**
- Make sure you shared the sheet with the service account email
- Double-check the service account email in `.env.local`

**Error: "Invalid credentials"**
- Verify the private key format in `.env.local`
- Ensure the private key includes `\n` characters

**No location data:**
- Location lookup requires valid public IP
- Local development (localhost) won't show location

## 🚀 Ready for Production:

Once working locally, deploy to Vercel/Netlify and add the same environment variables in your hosting platform's dashboard.

## 📞 Need Help?

If you encounter any issues during setup, the error messages will appear in:
- Browser console (F12 → Console)
- Server logs (terminal where `npm run dev` is running)