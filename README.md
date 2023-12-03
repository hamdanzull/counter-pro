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
**Note:** For example, when trying to access a specific user ID that hasn't been registered or doesn't match any available routes, the server responds with a 404 status code indicating that the requested resource cannot be found.

```
// Code 500

{"status":"error","message":"Internal Server Error"}
```
**Note:** This error is a generic response indicating that something unexpected went wrong on the server. It could be due to various reasons such as a code error, database connection issues, or other internal server problems that weren't handled properly.

- ### Get counter
```
// Code 200

{"status":"success","message":"The ID 'hamdanzull' was added and the count was successfully changed","count":1}

// Code 200

{"status":"success","message":"The count of ID 'hamdanzull' was successfully changed","count":2}
```

- ### Set counter
```
// Code 202

{"status":"success","message":"The ID 'hamdanzull' was added and the count was successfully changed","count":"1000"}

// Code 201

{"status":"success","message":"The count of ID 'hamdanzull' was successfully changed","count":"1000"}

// Code 400

{"status":"error","message":"Invalid count value for 'hamdanzull'. Count should be a number"}
```