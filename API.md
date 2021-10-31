# API Docs

Steamcord provides a REST API to access your organization's players.

### Authentication

API tokens for any organization can be generated in the [API tokens section](https://steamcord.io/dashboard/tokens) of the dashboard. API tokens have no expiration, but can be revoked at any time.

The Steamcord API uses a bearer authentication scheme. When making a request, pass your API token in the `Authorization` header.

#### Example

```http
Authorization: Bearer {API_TOKEN}
```

### Base URL

```
https://steamcord.io/api
```

### Status Codes

| Code               | Meaning                                                 |
| ------------------ | ------------------------------------------------------- |
| 200 (OK)           | Success                                                 |
| 401 (Unauthorized) | See the `WWW-Authenticate` header for more information. |

## Players Resource

### Player Object  

| Field                      | Type        | Description                         |
| -------------------------- | ----------- | ----------------------------------- |
| `playerId`                 | `Int32`     | -                                   |
| `discordAccount.discordId` | `String`    | -                                   |
| `discordAccount.username`  | `String`    | The player's full Discord username. |
| `steamAccount.steamId`     | `String`    | The player's Steam ID.              |
| `createdDate`              | `DateTime`  | UTC                                 |
| `modifiedDate`             | `DateTime?` | UTC                                 |


#### Example

```json
{
    "playerId": 1,
    "discordAccount": {
        "discordId": "304797177538936832",
        "discordUsername": "Jacob#3500",
    },
    "steamAccount": {
        "steamId": "76561198117837537"
    },
    "createdDate": "2021-10-31 17:34:46.896816",
    "modifiedDate": "2021-10-31 17:45:49.823991"
}
```

### Get All Players
`GET /players`

#### Query String Parameters

| Name        | Type     | Description                      |
| ----------- | -------- | -------------------------------- |
| `playerId`  | `Int32`  | -                                |
| `discordId` | `String` | -                                |
| `steamId`   | `String` | -                                |
| `limit`     | `Int32`  | The number of players to return. |

#### Example

```sh
curl -X 'GET' \
  'https://steamcord.io/api/players' \
  -H 'Authorization: Bearer {API_TOKEN}'
```
