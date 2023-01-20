# Integration Guide

Integrations can be used to connect Steamcord to various services, e.g. Discord guilds and game
servers.

## Create an Integration

Navigate to the [dashboard](https://steamcord.io/dashboard), select your organization, and click
`Integrations` in the side nav.  If applicable click the `New Integration` button, then fill out the
form.

## Game Server Configuration

Game servers require a plugin for most action types. For Rust, install the 
[Rust plugin](../integrations/rust-plugin.md) and use your integration's ID (found after the
integration name or in the URL) for the `IntegrationId` config property.

## Create an Action

After creating your integration, you will be prompted to create a new action. Actions can be used to
reward players for linking their accounts, joining your Discord guild, Steam group, and more. Every
time a player is updated, their eligibility is calculated for all actions, after which the
corresponding actions are invoked.


### Requirements

Requirements are the conditions a player must meet for an action to be run. For example, to run an 
action when a player has a Discord and Steam account linked check `Discord Linked` and `Steam Linked`.

### When to run this action

`Every time a player meets the requirements` or `Every time a player does not
meet the requirements` cover most use cases, however running an action only once is also possible.

### What to do when this action is run

Finally, you can select an action type and provide the type-specific arguments. Available action 
types vary depending on the integration type.

### Example

A common use case of actions is to give and remove an in-game group. For example, to give an Oxide
group to players who link their Discord and Steam accounts you can configure two actions as follows:

| Setting Name                       | Value                                        |
| ---------------------------------- | -------------------------------------------- |
| Requirements                       | `Discord`, `Steam`                           |
| Name                               | `add linked group`                           |
| When to run this action            | `Every time a player meets the requirements` |
| What to do when this action is run | `Add Oxide Group`                            |
| Group Name                         | `linked`                                     |

| Setting Name                       | Value                                                |
| ---------------------------------- | ---------------------------------------------------- |
| Requirements                       | `Discord`, `Steam`                                   |
| Name                               | `add linked group`                                   |
| When to run this action            | `Every time a player does not meet the requirements` |
| What to do when this action is run | `Remove Oxide Group`                                 |
| Group Name                         | `linked`                                             |

The first action adds the group when a player meets the requirements and the second removes it.