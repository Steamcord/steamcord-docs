# Introduction

You must subscribe to use Steamcord. See our [subscription plans](https://steamcord.io/#pricing).

## Games Currently Supported

The following games are currently supported out of the box.

* [Garry's Mod](https://gmod.facepunch.com/)
  * [Steamcord GMod](https://github.com/Steamcord/steamcord-gmod)
* [Rust](https://rust.facepunch.com/) (or any [Oxide/uMod game](https://umod.org/games))
  * [Steamcord Rust](https://github.com/Steamcord/steamcord-rust)
  * Rewards are provisioned via the Oxide permission system.

Coming soon:
* DayZ

> Want to integrate Steamcord with another Steam game? We expose everything necessary. See the
[API Reference](./api-reference/).

## Quick Start

### Configuring an Organization

Navigate to the [dashboard](https://steamcord.io/dashboard) and select your organization. If no
organization exists, you will be prompted to create one.

Ensure your organization is configured correctly. Pay special attention to the `Subdomain` setting,
as it is the identifier players will see when they use your Steamcord site.

#### Example

`https://{Subdomain}.steamcord.link/`

### Vanity Domain (Pro Only)

To use a custom domain, navigate to your registrar's DNS settings and create a CNAME record pointing to
`customers.steamcord.link`. Then, enter your custom domain into the `Vanity Domain` field and click
save. Please allow up to five minutes for verification to complete.

### Discord Settings

#### Discord Guild ID

To reward players for being a member of your Discord guild, click the `CONNECT TO GUILD` button to add
the bot to your guild.

#### Discord Role ID

To reward players with a Discord role, create a role and paste its ID into the `Discord Role ID` field.

> Ensure the reward role is positioned below the bot's role.

You can find your role ID by sending a message containing `\@{ROLE_NAME}`, e.g. `\@linked`, and
copying the numeric portion. Alternatively, navigate to the `Advanced` settings category and enable
`Developer Mode`, then right-click on the role and select `Copy ID`.

Toggle the switches below to set the requirements for the role. If a player no longer meets the specified requirements, the role will be removed.

### Steam Settings

#### Steam Group ID

To reward for players for being a member of your Steam group, paste your Steam group ID into the
`Steam Group ID` field.

You can find your Steam group ID on your group's edit profile page.

### Game Specific Setup

Install and configure the appropriate [Steamcord integration](#games-currently-supported) for your
game. Rewards can be setup per-service and progressively.

One organization can be used for multiple game servers (e.g. a Garry's Mod and Rust server owned by
the same community).

### That's it! :tada:

Once setup, players can visit your organization's Steamcord site at the link found in the dashboard,
which uses your organization's `Subdomain`.

#### Example

`https://wolfpack.steamcord.link/`

Once players use your site, they will appear in the players section of the dashboard. See the
[documentation for your game](#games-currently-supported) to learn how rewards are provisioned
in-game.

## Support

Need help? Contact us on via our [contact page](https://steamcord.io/#contact).
