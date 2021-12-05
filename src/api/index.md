# Introduction

## Authentication

API tokens for any organization can be generated in the
[API tokens section](https://steamcord.io/dashboard/tokens) of the dashboard. For security reasons,
you cannot view your API token once it is initially created. For this reason, be sure to give your
token a descriptive name. API tokens have no expiration, but can be revoked at any time.

The Steamcord API uses a bearer authentication scheme. When making a request, pass your API token in
the `Authorization` header.

### Example

```http
Authorization: Bearer {API_TOKEN}
```

## Base URL

```
https://steamcord.io/api
```


## Content Type

All request bodies must have a content type of `application/json`.

## Status Codes

| Code               | Meaning                                                 |
| ------------------ | ------------------------------------------------------- |
| 200 (OK)           | -                                                       |
| 204 (OK)           | -                                                       |
| 401 (Unauthorized) | See the `WWW-Authenticate` header for more information. |
| 403 (Forbidden)    | Subscription expired                                    |
| 429 (Rate Limit)   | -                                                       |

## Steam IDs

Steamcord uses [SteamID64](https://developer.valvesoftware.com/wiki/SteamID)s internally. All invalid Steam IDs will be ignored.
