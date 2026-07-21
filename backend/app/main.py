from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pathlib import Path

from app.api.routes import router

app = FastAPI()

# API ROUTES
app.include_router(router)


# CORS (для браузера)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# PATHS
BASE_DIR = Path(__file__).resolve().parent.parent.parent
FRONTEND_DIR = BASE_DIR / "frontend"


# Security check
if not FRONTEND_DIR.exists():
    raise RuntimeError(f"Frontend folder not found: {FRONTEND_DIR}")


# STATIC FRONTEND
app.mount("/", StaticFiles(directory=str(FRONTEND_DIR), html=True), name="frontend")


# HEALTH CHECK
@app.get("/health")
def health():
    return {"status": "ok"}