export class Profile {
  constructor(data) {
    this.email = data.email
    this.firstName = data.firstName
    this.lastName = data.lastName
    this.gamerTag = data.gamerTag
    this.profileXuid = data.ownerXuid
    this.dateOfBirth = new Date(data.dateOfBirth).toLocaleDateString()
    this.profileImg = data.imageUrl
  }
}
