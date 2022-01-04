# Steam Group Queue

Because of limitations of Steam's Web API, it is not possible to get all members of a Steam group
reliably. As a result, to update players' Steam groups, you must manually queue the Steam IDs of
the corresponding `Player` objects. Invalid Steam IDs will be ignored.

## Push a Steam ID

`POST /steam-groups/queue`

Pushes the specified Steam IDs onto the processing queue. Steam IDs not associated with a `Player`
object will be ignored. In most cases, you should queue the Steam IDs of all players online your
game server.

### Request Body

| Name            | Type       | Description                    |
| --------------- | ---------- | ------------------------------ |
| `steamIds`      | `string[]` | An array of Steam IDs to push. |

### Example
```bash
curl -X 'POST' \
  'https://steamcord.io/api/steam-groups/queue' \
  -H 'Authorization: Bearer {API_TOKEN}' \
  -H 'Content-Type: application/json' \
  -d '["76561198117837537", "76561198111997160"]'
```
