from app.database import SessionLocal
from app.models.category import Category
from app.models.product import Product


CATEGORIES = [
    {
        "id": 1,
        "name": "Colliers",
        "description": "Brillez avec élégance",
        "image": "/images/category_necklaces.png",
        "link": "/boutique/colliers",
    },
    {
        "id": 2,
        "name": "Boucles d'oreilles",
        "description": "Légères et pleines de charme",
        "image": "/images/category_earrings.png",
        "link": "/boutique/boucles-oreilles",
    },
    {
        "id": 3,
        "name": "Bracelets",
        "description": "Délicats et raffinés",
        "image": "/images/category_bracelets.png",
        "link": "/boutique/bracelets",
    },
    {
        "id": 4,
        "name": "Porte-clés",
        "description": "Emportez votre magie",
        "image": "/images/category-keyring.png",
        "link": "/boutique/porte-cles",
    },
    {
        "id": 5,
        "name": "Collections",
        "description": "Pour faire plaisir",
        "image": "/images/category-collections.png",
        "link": "/boutique/collections",
    },
]


PRODUCTS = [
    {
        "id": 1,
        "name": "Collier Initiale",
        "description": None,
        "price": 24.0,
        "stock": 0,
        "image": "/images/product_necklace.png",
        "customizable": False,
        "reviews": 0,
        "category_id": 1,
    },
    {
        "id": 2,
        "name": "Boucles Prénom",
        "description": None,
        "price": 20.0,
        "stock": 0,
        "image": "/images/product_earrings.png",
        "customizable": False,
        "reviews": 0,
        "category_id": 2,
    },
    {
        "id": 3,
        "name": "Bracelet Initiale",
        "description": None,
        "price": 18.0,
        "stock": 0,
        "image": "/images/product_bracelet.png",
        "customizable": False,
        "reviews": 0,
        "category_id": 3,
    },
    {
        "id": 4,
        "name": "Collier Lune Étoilée",
        "description": None,
        "price": 26.0,
        "stock": 0,
        "image": "/images/product_moonNecklace.png",
        "customizable": False,
        "reviews": 0,
        "category_id": 1,
    },
    {
        "id": 5,
        "name": "Boucles Lune",
        "description": None,
        "price": 22.0,
        "stock": 0,
        "image": "/images/product_moonEarrings.png",
        "customizable": False,
        "reviews": 0,
        "category_id": 2,
    },
    {
        "id": 6,
        "name": "Porte-clé Initiale",
        "description": None,
        "price": 12.0,
        "stock": 0,
        "image": "/images/product_keyring.png",
        "customizable": False,
        "reviews": 0,
        "category_id": 4,
    },
]


def seed_categories(db):
    for data in CATEGORIES:
        category = db.get(Category, data["id"])

        if category is None:
            db.add(Category(**data))
        else:
            # Rend le seed relançable : met à jour les données existantes.
            for key, value in data.items():
                setattr(category, key, value)

    db.flush()


def seed_products(db):
    for data in PRODUCTS:
        product = db.get(Product, data["id"])

        if product is None:
            db.add(Product(**data))
        else:
            # Rend le seed relançable : met à jour les données existantes.
            for key, value in data.items():
                setattr(product, key, value)


def main():
    db = SessionLocal()

    try:
        seed_categories(db)
        seed_products(db)
        db.commit()
        print("✅ Seed terminé : catégories et produits présents en base.")
    except Exception:
        db.rollback()
        print("❌ Erreur pendant le seed, rollback effectué.")
        raise
    finally:
        db.close()


if __name__ == "__main__":
    main()