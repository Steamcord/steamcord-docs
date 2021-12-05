# Players Resource

## Player Object  

| Field                      | Type        | Description                         |
| -------------------------- | ----------- | ----------------------------------- |
| `playerId`                 | `Int32`     | -                                   |
| `discordAccount.discordId` | `string`    | -                                   |
| `discordAccount.username`  | `string`    | The player's full Discord username. |
| `steamAccount.steamId`     | `string`    | -                                   |
| `createdDate`              | `DateTime`  | UTC                                 |
| `modifiedDate`             | `DateTime?` | UTC                                 |


### Example

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

## Get All Players
`GET /players`

> __Tip__ \
> If writing a custom Steamcord integration, use this endpoint to provision rewards on an interval.

### Query String Parameters

| Name           | Type       | Description                      |
| -------------- | ---------- | -------------------------------- |
| `playerId`     | `Int32`    | -                                |
| `discordId`    | `string`   | -                                |
| `steamId`      | `string`   | -                                |
| `limit`        | `Int32`    | The number of players to return. |
| `createdDate`  | `DateTime` | UTC                              |
| `modifiedDate` | `DateTime` | UTC                              |

### Example

```bash
curl -X 'GET' \
  'https://steamcord.io/api/players?limit=3&modifiedAfter=2021-10-31%2017%3A45%3A49.823991' \
  -H 'Authorization: Bearer {API_TOKEN}'
```
