# Counter-Pro
A simple visitor counter API for website using Node.js (Express)

API: https://counterpro.vercel.app/api

# How To Use
This API provides three ways to interact with visitor counters:

| Description  | Method |         Params         |              Query              |
| :---         | :---:  |          :---          |              :---               |
| Add new ID   | `GET`  | /new/id/name_id        | /new?id=name_id                 |
| Get counter  | `GET`  | /count/id/name_id      | /count/?id=name_id              |
| Set counter  | `GET`  | /set/name_id/num_count | /set?id=name_id&count=num_count |

- **Get counter:** Retrieve the counter for a specific ID. Provide the name_id in the URL path or through the query parameter.
- **Get counter for all:** Retrieve counters for all available IDs.
- **Set counter:** Update the counter value for a specific ID. Provide the name_id and num_count in the URL path or through the query parameters.


# Response
- ### Error
```
// Code 404

{"status":"error","message":"Route not found"}
```
**Note:** This error occurs when the requested endpoint or route doesn't exist on the server. For example, when trying to access a specific user ID that hasn't been registered or doesn't match any available routes, the server responds with a 404 status code indicating that the requested resource cannot be found.

```
// Code 500

{"status":"error","message":"Internal Server Error"}
```
**Note:** This error is a generic response indicating that something unexpected went wrong on the server. It could be due to various reasons such as a code error, database connection issues, or other internal server problems that weren't handled properly.

- ### Add new ID
```
{"status":"success","message":"ID of hamdanzull was added successfully","count":1}

// Or

{"status":"error","message":"ID of amdanzull already exists","count":1}
```

- ### Get counter
```
{"status":"success","message":"Get count successfully","count":2}

// Or

{"status":"error","message":"ID of hamdanzull not found"}
```

- ### Set counter
```
{"status":"success","message":"Count of hamdanzull was changed successfully","count":"1000"}

// Or

{"status":"error","message":"ID of hamdanzull not found"}

// Or

{"status":"error","message":"Invalid count value for hamdanzull. Count should be a number"}
```
