import axios from "axios";
import type { DataPeopleResults } from "../interfaces/interfaces"

export const api = axios.create({
  baseURL: "https://randomuser.me/api/"
});

export default async function getData(): Promise<DataPeopleResults> {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const connection = await api.get<DataPeopleResults>(
    "/?results=25&seed=meu-tipo"
  );
  return connection.data;
}