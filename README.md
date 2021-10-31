# Steamcord Docs

To use Steamcord, you must subscribe. See the [subscription plans available](https://steamcord.io/pricing).

## Games currently supported

The following games are currently supported out of the box.

* [Garry's Mod](https://gmod.facepunch.com/)
  * [Steamcord GMod](https://github.com/Steamcord/SteamcordGMod)
  * Rewards are provisioned via ranks.
* [Rust](https://rust.facepunch.com/) (or [any Oxide game](https://umod.org/games))
  * [Oxide.Ext.Steamcord](https://github.com/Steamcord/Oxide.Ext.Steamcord)
  * Rewards are provisioned via the Oxide permission system.

Coming soon:
* [DayZ](https://github.com/Steamcord/SteamcordDayZ)

> Want to integrate Steamcord with another Steam game? We expose everything necessary. See our [API docs](API.md).

## Setup

### Configuring an organization

Navigate to the [dashboard](https://steamcord.io/dashboard) and select the appropriate organization from the nav bar. Don't see your organization? [Create one](https://steamcord.io/orgs/new).

Ensure your organization is configured correctly, pay special attention to the `Slug` setting, as that is the identifier players will see when they use Steamcord.

#### Example

`https://steamcord.link/{SLUG}`

### Discord

To reward players for being a member of your Discord guild, paste your server's ID into the `Discord Guild ID` field and [invite the Steamcord Discord bot](https://steamcord.io/bot) to your guild.

### Steam

To reward for players for being a member of your Steam group, paste your Steam group's URL into the `Steam Group URL` field.

### Game specific setup

Install and configure the appropriate [Steamcord mod](#games-currently-supported) for your game. Rewards are provisioned differently on a per-game basic.

One organization can be used for multiple game servers (eg. a Garry's Mod and Rust server owned by the same community).

### That's it! 🎉

Once setup, players can visit your organization's Steamcord page at the link found in the dashboard, which uses your organization's `Slug`.

#### Example

`https://steamcord.link/CycloneRust`

Once players sign into their accounts, they should appear in the [players section](https://steamcord.io/dashboard/players) of the dashboard. See the [documentation for your game](#games-currently-supported) to learn how rewards are provisioned in-game.

## Need help?

Contact us on [Discord](https://steamcord.io/discord), via our [contact page](https://steamcord.io/contact), or shoot us an email at contact@steamcord.io
