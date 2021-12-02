# API Docs

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

### Content Type

All request bodies must have a content type of `application/json`.

### Status Codes

| Code               | Meaning                                                 |
| ------------------ | ------------------------------------------------------- |
| 200 (OK)           | -                                                       |
| 204 (OK)           | -                                                       |
| 401 (Unauthorized) | See the `WWW-Authenticate` header for more information. |
| 403 (Forbidden)    | Subscription expired                                    |
| 429 (Rate Limit)   | -                                                       |

### Steam IDs

Steamcord uses [SteamID64](https://developer.valvesoftware.com/wiki/SteamID)s internally. All invalid Steam IDs will be ignored.

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
        "username": "Jacob#3500"
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

> __Tip__ \
> If writing a custom Steamcord integration, use this endpoint to provision rewards on an interval.

#### Query String Parameters

| Name           | Type       | Description                      |
| -------------- | ---------- | -------------------------------- |
| `playerId`     | `Int32`    | -                                |
| `discordId`    | `string`   | -                                |
| `steamId`      | `string`   | -                                |
| `limit`        | `Int32`    | The number of players to return. |
| `createdDate`  | `DateTime` | UTC                              |
| `modifiedDate` | `DateTime` | UTC                              |

#### Example

```bash
curl -X 'GET' \
  'https://steamcord.io/api/players?limit=3&modifiedAfter=2021-10-31%2017%3A45%3A49.823991' \
  -H 'Authorization: Bearer {API_TOKEN}'
```

## Steam Group Queue

Because of limitations with Steam's Web API, it is not possible to get all members of a Steam group reliably. As a result, to update a player's Steam groups, you must manually queue the Steam IDs of the `Player` objects you wish to update. Invalid Steam IDs will be ignored.

### Push a Steam ID
`POST /steam-groups/queue/{steamGroupId}`

Pushes the specified Steam IDs onto the processing queue. Steam IDs not associated with a `Player` object will be ignored. In most cases, you should queue the Steam IDs of all players online your game server.

> __Important__ \
> This endpoint is rate limited aggressively. Please refrain from more than one request per minute. Abuse of this endpoint may jeapordize your account.

#### Request Body

| Name            | Type       | Description                    |
| --------------- | ---------- | ------------------------------ |
| `steamIds`      | `string[]` | An array of Steam IDs to push. |

#### Example
```bash
curl -X 'POST' \
  'https://steamcord.io/api/steam-groups/queue' \
  -H 'Authorization: Bearer {API_TOKEN}' \
  -H 'Content-Type: application/json' \
  -d '["76561198117837537", "76561198111997160"]'
```
