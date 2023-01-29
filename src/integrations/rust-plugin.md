# Rust Plugin

## Installation

1. Install [Oxide/uMod](https://umod.org/games/rust) on your game server.
1. Download the latest version of the Steamcord Rust plugin from the downloads page.
2. Move `Steamcord.cs` into your server's `oxide/plugins` directory.
3. Edit the `Steamcord.json` configuration file generated in the `oxide/config` directory. See the
[configuration reference](#configuration-reference).
4. Reload the plugin (`oxide.reload Steamcord`) for your changes to take effect.

## Chat Command

Players can use any of the configured commands (by default `/claim`) to receive their rewards
in-game.

## Configuration Reference

When first loaded, the plugin will generate a configuration file in the
`oxide/config` directory. The file contains a JSON object which can be used
to configure the plugin.

Below is the default configuration:

```json
{
  "Api": {
    "Token": "<your api token>",
  },
  "ChatCommands": [
    "claim"
  ],
  "ChatCommandsEnabled": true,
  "Rewards": [
    {
      "Requirements": [
        "DiscordGuildMember",
        "SteamGroupMember"
      ],
      "Group": "discord-steam-member"
    },
    {
      "Requirements": [
        "DiscordGuildBooster"
      ],
      "Group": "discord-booster"
    }
  ],
  "IntegrationId": null,
  "UpdateSteamGroups": true
}
```

### `Api` object

`Token` must a valid Steamcord API token, which can be generated in the
API tokens section of the dashboard.

### `ChatCommands` array

An array of in-game chat command names. Multiple commands can specified and will function as
aliases.

### `ChatCommandsEnabled` boolean

Whether chat commands are enabled.

### `Rewards` array

An array of `Reward` objects, each with `Requirements` and `GroupName`
properties.

The `Requirements` property is used to specify the required conditions for a player to earn the
reward.

Allowed `Requirements` values are as follows:

- `Discord` - The player linked their Discord account.
- `DiscordGuildMember` - The player is a member of the configured Discord guild. If a player meets
this requirement, they will also meet the `Discord` requirement.
- `DiscordGuildBooster` - The player is Nitro boosting the configured Discord guild. If a player
meets this requirement, they will also meet the `DiscordGuildMember` and `DiscordGuildBooster`
requirements.
- `Steam` - The player linked their Steam account.
- `SteamGroupMember` - The player is a member of the configured Steam group. If a player meets this
requirement, they will also meet the `Steam` requirement.

The `Group` property is used to specify an Oxide user group associated with the reward. If the
specified group does not exist, it will be created when the plugin is loaded.

Once a player meets all conditions specified in the `Requirements` array, they will be added to the
Oxide user group specified by the `Group` property.

### `IntegrationId` optional integer

An [integration](../guide/integration-guide) ID. If provided, the plugin will run all configured
actions.

### `UpdateSteamGroups` boolean

Whether to update Steam groups. If you do not have a Steam group configured, you can disable this.
