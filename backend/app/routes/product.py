from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Product

router = APIRouter(
    prefix="/products",
    tags=["products"]
)

@router.get("/")
def get_products(category_id: int | None = None, db: Session = Depends(get_db)):
    if category_id is not None:
        products = db.query(Product).filter(Product.category_id == category_id).all()
    else:
        products = db.query(Product).all()
    return products

@router.get("/{product_id}")
def get_product(product_id: int, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == product_id).first()
    if product is None:
        return {"error": "Product not found"}
    return product