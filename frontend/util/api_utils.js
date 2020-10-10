// fixme: const boat1 = { name: "lucy", length: 10, color: "yellow", spot_number: 5 };
// Boat index api
export const fetchAllBoats = () => {
  return fetch("/api/boats", { method: "GET" });
};

// Boat create api
export const createBoat = (boat) => {
  return fetch("/api/boats", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ boat }),
  });
};

// Boat update api
export const updateBoat = (id, spot_number) => {
  return fetch(`/api/boats/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ boat: { spot_number } }),
  });
};

// Boat destroy api
export const deleteBoat = (id) => {
  return fetch(`/api/boats/${id}`, { method: "DELETE" });
};
