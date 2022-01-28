
export class SteamProfile {
  constructor(data) {
    this.avatar = data.avatar
    this.avatarLg = data.avatarfull
    this.steamId = data.steamid
    this.profileURL = data.profileurl
    this.realName = data.realname
    this.userName = data.personaname
    this.lastLogOff = new Date(data.lastlogoff * 1000)
    this.profileCreatedAt = new Date(data.timecreated * 1000)
  }
}
