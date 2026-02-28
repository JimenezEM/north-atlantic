# VIN Decoder
A full-stack web application that decodes Vehicle Identification Numbers (VINs) using a real-world public API.
Built with FastAPI (Python) on the backend and Vite + JavaScript on the frontend.

## Key Features
- Decode VIN numbers (11–17 characters)
- Fetches real vehicle data from an external API
- FastAPI backend with async HTTP requests
- CORS configured for local development

## Tech Stack
Vite, JavaScript, Fetch API, Python, FastAPI, Uvicorn, HTTPX

## Project Context
The user enters a VIN number in the frontend which sends a request to the FastAPI backend. The backend calls an external VIN decoding API where relevant vehicle data is filtered and returned. The frontend displays the decoded information

## Notes
This project is not deployed live because:
The backend is built with Python (FastAPI). Despite this, the project is fully functional and runs locally as a complete full-stack application.
