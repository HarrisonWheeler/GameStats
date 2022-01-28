export class XblProfile {
  constructor(data) {
    this.xuid = data.xuid
    this.gamerTag = data.uniqueModernGamertag
    this.rep = data.xboxOneRep
    this.preferredColors = data.preferredColor
    this.presence = data.presenceText
    this.multiplayerSummary = data.multiplayerSummary
    this.gamerScore = data.gamerScore
    this.profileDetails = data.detail
    this.profileImg = data.displayPicRaw
    this.preferredPlatforms = data.preferredPlatforms
    this.linkedAccounts = data.linkedAccounts
  }
}
