import { API_URL } from "../consts.ts";
import { ISupply } from "../types.ts";

export const getSupplies = async (
  page: number,
  filter?: string,
  query?: string,
  limit: number = 10,
): Promise<{
  data: ISupply[];
  total: number;
  pages: number;
}> => {
  try {
    let url = `${API_URL}/supplies?_page=${page}&_limit=${limit}&_sort=id&_order=desc`;

    if (query && query.length >= 3) {
      url += `&q=${encodeURIComponent(query)}`;
    }

    if (filter) {
      url += `&_sort=${filter}&_order=asc`;
    }

    const res = await fetch(url);

    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    const data = await res.json();
    const total = parseInt(res.headers.get("x-total-count") || "0", 10);
    const pages = Math.ceil(total / limit);

    return {
      data,
      total,
      pages,
    };
  } catch (err) {
    throw new Error(`Failed to fetch supplies: ${err}`);
  }
};
export const createSupply = async (supplyData: ISupply): Promise<ISupply> => {
  try {
    const response = await fetch(`${API_URL}/supplies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...supplyData,
        quantity: Number(supplyData.quantity),
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return (await response.json()) as ISupply;
  } catch (error) {
    console.error("Error adding supply:", error);
    throw new Error(`Error adding supply:", error)`);
  }
};

export const updateSupply = async (
  id: number,
  supplyData: Omit<ISupply, "id">,
): Promise<ISupply> => {
  try {
    const response = await fetch(`${API_URL}/supplies/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...supplyData,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return (await response.json()) as ISupply;
  } catch (error) {
    console.error("Error updating supply:", error);
    throw error;
  }
};

export const deleteSupplyById = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/supplies/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error deleting supply:", error);
    throw new Error(`Failed to delete supply: ${error}`);
  }
};

export const searchSuppliesByFilter = async (
  filteredBy: string,
  query: string,
  page: number = 1,
  limit: number = 10,
): Promise<{
  data: ISupply[];
  total: number;
  pages: number;
}> => {
  try {
    let url = `${API_URL}/supplies?_page=${page}&_limit=${limit}&_sort=id&_order=desc`;

    if (query && query.length >= 3) {
      url += `&${filteredBy}_like=${encodeURIComponent(query)}`;
    }

    const res = await fetch(url);

    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    const data = await res.json();
    const total = parseInt(res.headers.get("x-total-count") || "0", 10);
    const pages = Math.ceil(total / limit);

    return { data, total, pages };
  } catch (err) {
    throw new Error(`Failed to search supplies: ${err}`);
  }
};
