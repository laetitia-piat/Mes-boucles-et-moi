const API_URL = process.env.API_URL ?? "http://backend:8000";

export async function getCategories() {
  const response = await fetch(`${API_URL}/categories/`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Impossible de récupérer les catégories");
  }

  return response.json();
}

export async function getCategory(id: number) {
  const response = await fetch(`${API_URL}/categories/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Impossible de récupérer la catégorie");
  }
  return response.json();
}
