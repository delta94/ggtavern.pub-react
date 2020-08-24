import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { ID } from 'app/models/id.model';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const authenticateAnonymously = () => {
    return firebase.auth().signInAnonymously();
};

/**
 * Gets all documents' data on the path specified. Does not retrieve sub-collections.
 * @param queryPath document path for location to query
 */
export const getItems = async <T>(queryPath: string): Promise<T[]> => {
    let items: T[] = [];
    try {
        const collection = await db.collection(queryPath).get();
        if (!collection.empty) {
            for (const item of collection.docs) {
                const data = item.data() as T;
                items = [...items, data];
            }
        }
        return items;
    } catch (err) {
        throw err;
    }
}

/**
 * Gets all documents' data on the path specified. Does not retrieve sub-collections.
 * @param queryPath document path for location to query
 */
export const getItemswithID = async <T extends ID>(queryPath: string): Promise<T[]> => {
    let items: T[] = [];
    try {
        const collection = await db.collection(queryPath).get();
        if (!collection.empty) {
            for (const item of collection.docs) {
                const data = item.data() as T;
                data.id = item.id;
                items = [...items, data];
            }
        }
        return items;
    } catch (err) {
        throw err;
    }
}
