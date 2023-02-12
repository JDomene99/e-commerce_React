const api = "https://ecommerce-api-5qsx.onrender.com";
//  const api = 'http://localhost:4000'
export const getProductsSorter = async (sort) => {
  const response = await fetch(`${api}/products/sort/${sort}`);
  const data = await response.json();

  return data;
};
export const getProductFilter = async (type) => {
  let url = "";
  type === "all"
    ? (url = `${api}/products/${type}`)
    : (url = `${api}/products/category/${type}`);

  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export const getProductsBySize = async (size) => {
  const response = await fetch(`${api}/products/${size}`);
  const data = await response.json();

  return data;
};

export const insertProduct = async (product) => {
  try {
    const response = await fetch(`${api}/product`, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw {
        status: response.status,
        statusText: response.statusText,
      };
    } else {
      return await response.json();
    }
  } catch (error) {}
};

export const getProduct = async (id) => {
  try {
    const response = await fetch(`${api}/product/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {}
};
