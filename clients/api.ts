import { GraphQLClient } from "graphql-request";

const isClient = typeof window !== "undefined";

export const graphqlClient = new GraphQLClient('http://localhost:8000/graphql', {
    headers: () => {
        const headers: Record<string, string> = {};
        if (isClient) {
            const token = window.localStorage.getItem("__x_token__");
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
        }
        return headers;
    }
});
