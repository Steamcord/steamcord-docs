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

## The Players Resource

### The Player Object  

| Field                             | Type       | Description                         |
| --------------------------------- | ---------- | ----------------------------------- |
| `Player.PlayerId`                 | `Int32`    | -                                   |
| `Player.DiscordAccount.DiscordId` | `String`   | -                                   |
| `Player.DiscordAccount.Username`  | `String`   | The player's full Discord username. |
| `Player.SteamAccount.SteamId`     | `String`   | The player's Steam ID.              |
| `Player.CreatedDate`              | `DateTime` | -                                   |

#### Example:

```json
{
    "PlayerId": 1,
    "DiscordAccount": {
        "DiscordId": "304797177538936832",
        "DiscordUsername": "Jacob#3500"
    },
    "SteamAccount": {
        "SteamId": "76561198117837537"
    },
    "CreatedDate": "-"
}
```

### Get All Players
`GET /players`

#### Query String Parameters

| Name        | Type     | Description                      |
| ----------- | -------- | -------------------------------- |
| `PlayerId`  | `Int32`  | -                                |
| `DiscordId` | `String` | -                                |
| `SteamId`   | `String` | -                                |
| `Limit`     | `Int32`  | The number of players to return. |

#### Example

```sh
curl https://steamcord.io/api/players?discordId=304797177538936832 -H "Authorization: Bearer {API_TOKEN}"
```
