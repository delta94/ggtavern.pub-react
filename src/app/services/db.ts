import { getItemsfromFirestore, getItemswithIDfromFirestore } from 'app/services/firebase';
import { ID } from 'app/models/id.model';

export const getItems = async <T,>(path: string): Promise<T[]> => {
  const items = await getItemsfromFirestore<T>(path);
  return items;
};
export const getItemswithID = async <T extends ID>(
  path: string
): Promise<T[]> => {
  const items = await getItemswithIDfromFirestore<T>(path);
  return items;
};
