const API_URL = process.env.API_URL ?? "http://backend:8000";

export async function getProducts() {
  const response = await fetch(`${API_URL}/products/`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Impossible de récupérer les produits");
  }
  return response.json();
}

export async function getProductsByCategory(categoryId: number) {
  const response = await fetch(
    `${API_URL}/products/?category_id=${categoryId}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Impossible de récupérer les produits");
  }
  return response.json();
}

export async function getProduct(id: number) {
  const response = await fetch(`${API_URL}/products/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Impossible de récupérer le produit");
  }
  return response.json();
}
