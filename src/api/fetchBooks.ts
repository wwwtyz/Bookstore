import axios from "axios";

const apiPath = "https://api.itbook.store/1.0/new";

export async function fetchBooks(): Promise<any> {
  const { data } = await axios.get(apiPath);
  console.log(data);

  return data;
}
