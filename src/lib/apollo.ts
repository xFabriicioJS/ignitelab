import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rqfkjw1ggg01wb2q3cebnv/master',
    cache: new InMemoryCache()
})
