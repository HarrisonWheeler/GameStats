import { AppState } from "../AppState"
import { steamKey, steamUserId, xauth, xuid } from "../env"
import { SteamProfile } from "../models/SteamProfile"
import { XblProfile } from "../models/XblProfile"
import { loadState, saveState } from "../utils/LocalStorage"
import { logger } from "../utils/Logger"
import { steamApi, xblApi } from "./AxiosService"

// NOTE saving the XUID in the profile object - can just pull it off of the profile of the current user
class ProfileService {
  async getXblProfile() {
    // FIXME seems to need a fresh xbox authentication everyday to make this request succeed - need to look into this
    // TODO save profile into to local storage to prevent the need for a call to get xbl profile information everytime - or save the time the request was made, and only make another request to check profile data every day or few days
    debugger
    if (AppState.xblProfile.lastTimeRetrieved - Date.now() > 86400000) {
      const res = await xblApi.get(`${xuid}/new-profile`, {
        headers: {
          "X-AUTH": xauth
        }
      })
      logger.log('xbl api response', res.data)
      AppState.xblProfile = new XblProfile(res.data)
      saveState()
    } else {
      loadState()
    }
  }

  async getSteamProfile() {
    // NOTE using chrome extension to handle CORS error on localhost - will need to look into a better long term solution - may have to do with the site registration with the steam key
    const res = await steamApi.get(`ISteamUser/GetPlayerSummaries/v0002/?key=${steamKey}&steamids=${steamUserId}`)
    logger.log('steam api response', res.data)
    AppState.steamProfile = new SteamProfile(res.data.response.players[0])
    saveState()
  }

}

export const profileService = new ProfileService()
