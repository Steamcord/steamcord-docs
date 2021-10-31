# Steamcord Documentation

To use Steamcord, you must subscribe. See the [plans](https://steamcord.io/pricing) available.

## Games currently supported

The following games are currently supported out of the box.

* [Garry's Mod](https://github.com/Steamcord/SteamcordGMod)
  * Rewards are provisioned via ranks.
* [Rust](https://github.com/Steamcord/Oxide.Ext.Steamcord)
  * Rewards are provisioned via the Oxide permission system.

Coming soon:
* [DayZ](https://github.com/Steamcord/SteamcordDayZ)

> Want integrate Steamcord with another Steam game? We expose everything necessary. See our [API docs](https://github.com/Steamcord/docs/DEVELOPERS.md).

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

The Rust extension can be found [here](https://github.com/Steamcord/Oxide.Ext.Steamcord).

### That's it! 🎉

Once setup, players can visit your community's Steamcord page at the link found in the dashboard, which uses your organization's `Slug`.

#### Example

`https://steamcord.link/CycloneRust`

Once your players start connecting accounts, they will receive rewards!

## Need help?

Contact us on [Discord](https://steamcord.io/discord), via our [contact page](https://steamcord.io/contact), or shoot us an email at contact@steamcord.io
