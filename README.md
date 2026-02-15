PitchAI Intelligence

AI-powered venture evaluation and execution intelligence platform.

PitchAI transforms startup pitch scripts and pitch decks into structured, multi-dimensional institutional analytics. It combines LLM-based reasoning with deterministic weighted scoring to simulate venture capital evaluation workflows.

Overview

PitchAI is a full-stack application designed to:

Evaluate startup pitches using structured scoring matrices

Generate quantitative and qualitative investor-style analysis

Assess communication and execution risks

Provide AI-generated improvement synthesis

Generate execution roadmaps with phased milestones

Maintain a curated portfolio of selected projects

This system separates:

Core business fundamentals

Communication quality

Risk exposure

Execution planning

It is built as a modular AI SaaS architecture.

Core Features
1. Structured Evaluation Engine

Multi-dimensional core scoring (Problem, Market, Differentiation, etc.)

Communication performance scoring

Risk assessment matrix

Weighted overall scoring algorithm

PDF pitch extraction support

2. AI Explanation Engine

Justifies numeric scores

Identifies strengths and weaknesses

Generates investor likely questions

Produces refined pitch versions

Generates elite 60-second pitch summary

3. Portfolio Vault

Save selected evaluations

View curated high-potential projects

Track weighted performance scores

4. Execution Blueprint Generator

AI-generated multi-phase roadmap

Tools and technologies suggestions

Testing strategy

Deployment guidance

Learning resources

Step-level progress tracking

5. Institutional Dashboard

Core metric bar charts

Radar communication analysis

Risk distribution visualization

Score benchmarking

Performance breakdown analytics

Tech Stack
Frontend

React.js

Tailwind CSS

Framer Motion

Recharts

Axios

React Router

Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

Bcrypt

Nodemailer

Gemini LLM Integration

System Architecture

User → Pitch Submission → AI Structured Scoring → Weighted Score Calculation → Database Storage → Optional AI Explanation → Dashboard Visualization → Optional Roadmap Generation

The scoring and explanation phases are intentionally separated to maintain deterministic score integrity.

Local Development Setup
1. Prerequisites

Make sure you have:

Node.js (v18+ recommended)

MongoDB (local or MongoDB Atlas)

npm or yarn

Gemini API key

Gmail app password (for email service)

2. Clone Repository
git clone https://github.com/your-username/pitchai-intelligence.git
cd Pitch AI

3. Backend Setup

Navigate to backend directory:

cd backend


Install dependencies:

npm install


Create a .env file inside server/:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
GEMINI_API_KEY=your_gemini_api_key


Start backend server:

npm run dev


Server will run at:

http://localhost:5000

4. Frontend Setup

Open a new terminal and navigate to frontend:

cd frontend


Install dependencies:

npm install


Start development server:

npm run dev


Frontend will run at:

http://localhost:5173

5. API Configuration

Ensure frontend API base URL points to:

http://localhost:5000/api


If using Axios instance, verify:

baseURL: "http://localhost:5000/api"

Environment Variables Reference
Variable	Description
PORT	Backend server port
MONGO_URI	MongoDB connection string
JWT_SECRET	JWT signing secret
GEMINI_API_KEY	Google Gemini API key
EMAIL_USER	Gmail address for OTP
EMAIL_PASS	Gmail app password
Production Considerations

This project currently uses:

In-memory OTP storage

Direct Gemini API calls

Basic error handling

For production deployment, consider:

Redis-based OTP storage

Rate limiting

API quota handling

Centralized error middleware

Token refresh system

Logging system (Winston / Morgan)

Docker containerization

Deployment

Recommended deployment stack:

Backend:

Render / Railway / AWS EC2

Frontend:

Vercel / Netlify

Database:

MongoDB Atlas

Known Limitations

AI quota dependency (Gemini rate limits apply)

No token refresh mechanism

Basic admin controls

No caching layer

Future Improvements

Public shareable evaluation reports

PDF export

Historical trend comparison

Multi-user team dashboards

Advanced benchmarking engine

Model selection control

License

MIT License
