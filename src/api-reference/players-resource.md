# Players Resource

## The `Player` Object

| Field                      | Type               | Description                         |
| -------------------------- | ------------------ | ----------------------------------- |
| `playerId`                 | `Int32`            | -                                   |
| `discordAccounts`          | `DiscordAccount[]` | -                                   |
| `steamAccounts`            | `SteamAccount[]`   | -                                   |
| `createdDate`              | `DateTime`         | UTC                                 |
| `modifiedDate`             | `DateTime?`        | UTC                                 |

### The `DiscordAccount` Object

| Field          | Type        | Description                         |
| -------------- | ----------- | ----------------------------------- |
| `discordId`    | `string`    | -                                   |
| `username`     | `string`    | The player's full Discord username. |

### The `SteamAccount` Object

| Field     | Type     | Description |
| --------- | -------- | ----------- |
| `steamId` | `string` | -           |

### Remarks

One player can have multiple accounts, however one account cannot belong to multiple
players. In the case that two players sign into the same account, the associated `Player` objects
will be merged.

### Example

```json
{
    "playerId": 1,
    "discordAccounts": [
        {
            "discordId": "304797177538936832",
            "username": "Jacob#3500"
        }
    ],
    "steamAccounts": [
        {
            "steamId": "76561198117837537"
        }
    ],
    "createdDate": "2021-10-31 17:34:46.896816",
    "modifiedDate": "2021-10-31 17:45:49.823991"
}
```

## Get All Players

`GET /players`

### Query String Parameters

| Name            | Type       | Default | Description                                   |
| --------------- | ---------- | ------- | --------------------------------------------- |
| `playerId`      | `Int32`    | -       | -                                             |
| `discordId`     | `string`   | -       | -                                             |
| `steamId`       | `string`   | -       | -                                             |
| `limit`         | `Int32`    | `100`   | The number of players to return. At most 100. |
| `page`          | `Int32`    | `0`     | The zero-indexed page.                        |
| `createdAfter`  | `DateTime` | -       | UTC                                           |
| `modifiedAfter` | `DateTime` | -       | UTC                                           |

### Response Headers

| Name            | Description                                              |
| --------------- | -------------------------------------------------------- |
| `X-Total-Pages` | The total number of pages, calculated using the `limit`. |

### Example

```bash
curl -X 'GET' \
  'https://steamcord.io/api/players?limit=3&modifiedAfter=2021-10-31%2017%3A45%3A49.823991' \
  -H 'Authorization: Bearer {API_TOKEN}'
```
