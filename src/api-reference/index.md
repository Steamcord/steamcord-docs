# Introduction

## Authentication

API tokens for any organization can be generated in the
[API tokens section](https://steamcord.io/dashboard/tokens) of the dashboard. For security reasons,
you cannot view your API token after it is initially created; therefore be sure to give your token a
descriptive name. Although API tokens have no expiration, you can revoke them at any time.

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

## Rate Limits

To allow request bursts, API endpoints are rate limited to 300 requests per minute, but no more than
3,000 per hour.

### Response Headers

| Name                     | Description                                           |
| ------------------------ | ----------------------------------------------------- |
| `X-Rate-Limit-Limit`     | The rate limit period, eg. `1h`.                      |
| `X-Rate-Limit-Remaining` | The number of requests remaining.                     |
| `X-Rate-Limit-Reset`     | The UTC `DateTime` when the rate limit will be reset. |

## Status Codes

| Code               | Meaning                                                 |
| ------------------ | ------------------------------------------------------- |
| 200 (OK)           | -                                                       |
| 204 (OK)           | -                                                       |
| 401 (Unauthorized) | See the `WWW-Authenticate` header for more information. |
| 403 (Forbidden)    | Subscription expired                                    |
| 429 (Rate Limit)   | -                                                       |

## Steam IDs

Steamcord uses [SteamID64](https://developer.valvesoftware.com/wiki/SteamID)s internally. All
invalid Steam IDs will be ignored.
