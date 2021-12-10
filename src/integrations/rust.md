# Steamcord Rust

## Installation

1. Install [Oxide/uMod](https://umod.org/games/rust) on your game server.
1. Download the latest version of the Steamcord Rust plugin from the
[downloads page](https://steamcord.io/dashboard/downloads).
2. Move `Steamcord.cs` into your server's `oxide/plugins` directory.
3. Edit the `Steamcord.json` configuration file generated in the `oxide/config` directory. See the
[configuration reference](#configuration-reference).
4. Reload the plugin (`oxide.reload Steamcord`) for your changes to take effect.

## Configuration Reference

When first loaded, the Steamcord Rust plugin will generate a JSON configuration file in the
`oxide/config` directory named `Steamcord.json`. The file contains a JSON object which can be used
to configure the plugin.

Below is the default configuration:

```json
{
  "Api": {
    "Token": "<your api token>",
    "BaseUri": "https://steamcord.io/api"
  },
  "Rewards": [
    {
      "Requirements": ["DiscordGuildMember", "SteamGroupMember"],
      "GroupName": "steamcord.discord_steam_member"
    },
    {
      "Requirements": ["DiscordGuildBooster"],
      "GroupName": "steamcord.discord_booster"
    },
  ],
}
```

### `Api` Object

`Token` must a valid Steamcord API token, which can be generated in the
[API tokens](https://steamcord.io/dashboard/tokens) section of the dashboard.

### `Rewards` Array

`Rewards` is a JSON array of `Reward` objects, each with a `Requirements` array and a `GroupName`
property.

The `Requirements` property is used to specify the required conditions for a player to earn the
reward.

Allowed `Requirements` elements are as follows:

- `Discord` - The player connected their Discord account
- `DiscordGuildMember` - The player is a member of the configured Discord guild. If a player meets
this requirement, they will also meet the `Discord` requirement
- `DiscordGuildBooster` - The player is Nitro boosting the configured Discord guild. If a player
meets this requirement, they will also meet the `DiscordGuildMember` and `DiscordGuildBooster`
requirements.
- `Steam` - The player connected their Steam account
- `SteamGroupMember` - The player is a member of the configured Steam group. If a player meets this
requirement, they will also meet the `Steam` requirement.

The `GroupName` property is used to specify an Oxide user group associated with the reward. If the
specified group does not exist, it will be created when the plugin is loaded.

Once a player meets all conditions specified in the `Requirements` array, they will be added to the
Oxide user group specified by the `GroupName` property.
