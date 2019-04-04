/**
 * importing the apollo packages to create an http server link,
 * to call the link and get some data in response
 */
import { createHttpLink } from "apollo-link-http"
import ApolloClient from "apollo-boost"

const client = new ApolloClient({
  link: createHttpLink({ uri: "http://jsonplaceholder.typicode.com/todos/1" }),
  method: 'GET'
})

/**
 * exporting this client as functional component,
 * to access this client on query rendering
 */
export { client }
export default { client }