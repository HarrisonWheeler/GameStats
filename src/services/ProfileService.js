import axios from "axios"
import { AppState } from "../AppState"
import { Profile } from "../models/Profile"
import { logger } from "../utils/Logger"

const xblApi = axios.create({
  baseURL: 'https://xapi.us/v2/',
  timeout: 8000
})

const xuid = '2533274805814674'

// NOTE saving the XUID in the profile object - can just pull it off of the profile of the current user
class ProfileService {
  async getProfile() {
    const res = await xblApi.get(`/${xuid}/new-profile`, {
      headers: {
        "X-AUTH": "1d395cf0c099eed346eef8836040323f5c56f6e6"
      }
    })
    logger.log('get profile res', res.data)
    AppState.profile = new Profile(res.data)
  }

}

export const profileService = new ProfileService()
