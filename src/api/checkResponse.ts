export function checkResponse(response: Response) {
  if (!response.ok) {
    throw new Error('The server is incorrect');
  }

  return response;
}
