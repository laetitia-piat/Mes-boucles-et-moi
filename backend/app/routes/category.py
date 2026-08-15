from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Category
from app.schemas import CategoryCreate

router = APIRouter(
    prefix="/categories",
    tags=["categories"]
)

@router.post("/")
def create_category(
        category: CategoryCreate, 
        db: Session = Depends(get_db)
        ):
    new_category = Category(
        name=category.name,
        description=category.description,
        image=category.image,
        link=category.link
    )
    db.add(new_category)
    db.commit()
    db.refresh(new_category)

    return new_category

@router.get("/")
def get_categories(db: Session = Depends(get_db)):
    categories = db.query(Category).all()
    return categories