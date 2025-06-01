import uvicorn
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# This is your GET endpoint
@app.get("/decode-vin")
async def decode_vin(vin: str = Query(..., min_length=11, max_length=17)):
    url = f"https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/{vin}?format=json"
    async with httpx.AsyncClient() as client:
        response = await client.get(url)

    data = response.json()

    # Filter some important fields
    relevant = {}
    for item in data["Results"]:
        if item["Variable"] in ["Make", "Model", "Model Year", "Doors", "Drive Type"]:
            relevant[item["Variable"]] = item["Value"]

    return {"vin": vin, "details": relevant}



if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)