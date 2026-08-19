from pydantic import BaseModel 

class ProductCreate(BaseModel):
    name: str
    description: str
    price: float
    image: str
    customizable: bool | None
    reviews: int | None