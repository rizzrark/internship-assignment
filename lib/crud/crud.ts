export async function saveDevices(data) {
  const response = await fetch("/api/devices", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
