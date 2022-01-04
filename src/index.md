# Introduction

You must subscribe to use Steamcord. See our [subscription plans](https://steamcord.io/#pricing).

## Games Currently Supported

The following games are currently supported out of the box.

* [Garry's Mod](https://gmod.facepunch.com/)
  * [Steamcord GMod](https://github.com/Steamcord/SteamcordGMod)
  * Rewards are provisioned via ranks.
* [Rust](https://rust.facepunch.com/) (or any [Oxide/uMod game](https://umod.org/games))
  * [Steamcord Rust](https://github.com/Steamcord/steamcord-rust)
  * Rewards are provisioned via the Oxide permission system.

Coming soon:
* [DayZ](https://github.com/Steamcord/SteamcordDayZ)

> Want to integrate Steamcord with another Steam game? We expose everything necessary. See the
[API reference](./api-reference/).

## Quick Start

### Configuring an Organization

Navigate to the [dashboard](https://steamcord.io/dashboard) and select the appropriate organization
from the nav bar. If no organization exists, you will be prompted to create one.

Ensure your organization is configured correctly. Pay special attention to the `Slug` setting, as
it is the identifier players will see when they use your Steamcord site.

#### Example

`https://steamcord.link/{SLUG}`

### Discord Settings

To reward players for being a member of your Discord guild, paste your server's ID into the `Discord
Guild ID` field and [invite the Steamcord Discord bot](https://steamcord.io/bot) to your guild.

### Steam Settings

To reward for players for being a member of your Steam group, paste your Steam group's ID into the
`Steam Group ID` field.

### Game Specific Setup

Install and configure the appropriate [Steamcord integration](#games-currently-supported) for your
game. Rewards can be setup per-service and progressively.

One organization can be used for multiple game servers (eg. a Garry's Mod and Rust server owned by
the same community).

### That's it! :tada:

Once setup, players can visit your organization's Steamcord site at the link found in the dashboard,
which uses your organization's `Slug`.

#### Example

`https://steamcord.link/CycloneRust`

Once players use your site, they will appear in the
[players section](https://steamcord.io/dashboard/players) of the dashboard. See the
[documentation for your game](#games-currently-supported) to learn how rewards are provisioned
in-game.

## Support

Need help? Contact us on via our [contact page](https://steamcord.io/#contact).
