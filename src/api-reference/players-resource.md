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

| Field            | Type        | Description                          |
| ---------------- | ----------- | ------------------------------------ |
| `discordId`      | `string`    | -                                    |
| `username`       | `string`    | The account's full Discord username. |
| `avatar`         | `string`    | -                                    |
| `isGuildMember`  | `bool?`     | -                                    |
| `isGuildBooster` | `bool?`     | -                                    |
| `isSoftUnlinked` | `bool`      | -                                    |

### The `SteamAccount` Object

| Field                | Type     | Description |
| -------------------- | -------- | ----------- |
| `steamId`            | `string` | -           |
| `username`           | `string` | -           |
| `avatar`             | `string` | -           |
| `isSteamGroupMember` | `bool?`  | -           |
| `isSoftUnlinked`     | `bool`   | -           |

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
            "username": "Jacob#3500",
            "avatar": "https://cdn.discordapp.com/avatars/304797177538936832/cb50b3412e61a9eb98049197af95a058.png",
            "isGuildMember": true,
            "isGuildBooster": false,
            "isSoftUnlinked": false
        }
    ],
    "steamAccounts": [
        {
            "steamId": "76561198117837537"
            "username": "Jacob",
            "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c8/c8b970a83746bef73d3042968e8ee43bcc0c8efc_full.jpg",
            "isSteamGroupMember": true,
            "isSoftUnlinked": false
        }
    ],
    "createdDate": "2021-10-31 17:34:46.896816",
    "modifiedDate": "2021-10-31 17:45:49.823991"
}
```

## Get All Players

`GET /players`

### Query String Parameters

| Name            | Type       | Default  | Description                                   |
| --------------- | ---------- | -------- | --------------------------------------------- |
| `playerId`      | `Int32`    | -        | -                                             |
| `discordId`     | `string`   | -        | -                                             |
| `steamId`       | `string`   | -        | -                                             |
| `limit`         | `Int32`    | `100`    | The number of players to return. At most 100. |
| `page`          | `Int32`    | `0`      | The zero-indexed page.                        |
| `status`        | `string`   | `linked` | Use `all` to include unlinked accounts.       | 
| `createdAfter`  | `DateTime` | -        | UTC                                           |
| `modifiedAfter` | `DateTime` | -        | UTC                                           |

### Response Headers

| Name            | Description                                              |
| --------------- | -------------------------------------------------------- |
| `X-Total`       | The total number of players.                             |
| `X-Total-Pages` | The total number of pages, calculated using the `limit`. |

### Example

```bash
curl -X 'GET' \
  'https://api.steamcord.io/players?limit=3&modifiedAfter=2021-10-31%2017%3A45%3A49.823991' \
  -H 'Authorization: Bearer {API_TOKEN}'
```
