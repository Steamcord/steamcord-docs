# Action Queue (Beta)

Actions are a reactive way to run or queue tasks when requirements are met. Some actions can be
provisioned instantly, e.g. adding a Discord role. Other actions are *deferred* in that they must
be executed by a client. Actions belong to an Integration and can be created in the dashboard.

## Get deferred actions

`GET /integrations/{id}/queue`

Gets all queued actions for the specified server. Actions are not dequeued until their delivery is
acknowledged.

### Example

```bash
curl -X 'GET' \
  'https://api.steamcord.io/integrations/1/queue' \
  -H 'Authorization: Bearer {API_TOKEN}'
```

```json
[
  {
    "id": 1,
    "definitionName": "addOxideGroup",
    "player": {
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
    "arguments": {
      "groupName": "linked"
      },
    "createdDate": "2022-08-05T03:40:49.138944"
  }
]
```

## Acknowledge deferred actions

`PUT /integrations/{id}/ack`

Acks (dequeues) the specified actions. This endpoint is idempotent.

### Remarks

It is recommended you ack actions immediately avoid a race condition.

### Request Body

| Name  | Type       | Description                   |
| ----- | ---------- | ----------------------------- |
| `ids` | `int[]`    | An array of action IDs to ack |

### Example

#### Request

```bash
curl -X 'PUT' \
  'https://api.steamcord.io/integrations/1/ack' \
  -H 'Authorization: Bearer {API_TOKEN}' \
  -H 'Content-Type: application/json' \
  -d '[24, 31]'
```
