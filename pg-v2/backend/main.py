from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def get_root():
    input()
    return {
        "product": "PG backend",
        "status": "Healthy"
    }

def main():
    print("Hello from backend!")


if __name__ == "__main__":
    main()
