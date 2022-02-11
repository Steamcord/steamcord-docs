# Steam Group Queue

Due to limitations of Steam's Web API, it is not possible to get all members of a Steam group
reliably. As a result, to update players' Steam groups, you must manually queue the Steam IDs of the 
corresponding `Player` objects. Invalid Steam IDs will be ignored.

## Enqueue Steam IDs

`POST /steam-groups/queue`

Enqueues the specified Steam IDs for processing. Steam IDs not associated with a `Player` object
will be ignored. In most cases, you should queue the Steam IDs of all players online your game
server.

### Request Body

| Name            | Type       | Description                    |
| --------------- | ---------- | ------------------------------ |
| `steamIds`      | `string[]` | An array of Steam IDs to push. |

### Example
```bash
curl -X 'POST' \
  'https://api.steamcord.io/steam-groups/queue' \
  -H 'Authorization: Bearer {API_TOKEN}' \
  -H 'Content-Type: application/json' \
  -d '["76561198117837537", "76561198111997160"]'
```
