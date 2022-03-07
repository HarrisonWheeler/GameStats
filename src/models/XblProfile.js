export class XblProfile {
  constructor(data) {
    this.xuid = data.xuid
    this.gamerTag = data.uniqueModernGamertag || data.gamerTag
    this.rep = data.xboxOneRep || data.rep
    this.preferredColors = data.preferredColor || data.preferredColors
    this.presence = data.presenceText || data.presence
    this.multiplayerSummary = data.multiplayerSummary
    this.gamerScore = data.gamerScore
    this.profileDetails = data.detail || data.profileDetails
    this.profileImg = data.displayPicRaw || data.profileImg
    this.preferredPlatforms = data.preferredPlatforms
    this.linkedAccounts = data.linkedAccounts
    this.lastTimeRetrieved = Date.now()
  }
}
