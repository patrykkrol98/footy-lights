export interface Match {
        "area": {
            "id": number,
            "name": string,
            "code": string,
            "flag": URL
        },
        "competition": {
            "id": number,
            "name": string,
            "code": string,
            "type": string,
            "emblem": URL
        },
        "season": {
            "id": number,
            "startDate": Date,
            "endDate": Date,
            "currentMatchday": number,
            "winner": string | null
        },
        "id": number,
        "utcDate": Date,
        "status": string,
        "matchday": number,
        "stage": string,
        "group": string,
        "lastUpdated": Date,
        "homeTeam": {
            "id": number,
            "name": string,
            "shortName": string,
            "tla": string,
            "crest": URL
        },
        "awayTeam": {
            "id": number,
            "name": string,
            "shortName": string,
            "tla": string,
            "crest": URL
        },
        "score": {
            "winner": string | null,
            "duration": string,
            "fullTime": {
                "home": string | null,
                "away": string | null
            },
            "halfTime": {
                "home": string | null,
                "away": string | null
            }
        },
        "referees": [
            {
                "id": number,
                "name": string,
                "type": string,
                "nationality": string
            } | undefined
        ] 
}
