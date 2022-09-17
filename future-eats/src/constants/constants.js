import axios from "axios";

export const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/'
export const tempToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InUzWnZCTDF2VG5nT1ZCRDdqYjVvIiwibmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJjcGYiOiI3NDkuNjU2LjU5MC0zMSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NjM0NDI0NzR9.pF_42XyEGQ6zuHV3vA-oE0a6ajyLof-akxY_hRClRGE'
export const restaurantListRequest = axios.get(`${baseUrl}restaurants`, {
    headers: {
        "auth": tempToken
    }
})