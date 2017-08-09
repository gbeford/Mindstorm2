export class TeamProfile {
    public id: number;
    public name: string;
    public email: string;
    public password: string;
    public created_at: Date;
    public updated_at: Date;
    public from_email: string;
    public full_name: string;
    public contact_name: string;
}

//Json Sample
 // "competition": {
    //     "id": 5;
    //     "name": "agawam",
    //     "email": "jay1cameron@yahoo.com",
    //     "password": "FLL2015",
    //     "created_at": "2011-11-26T15:45:26.130Z",
    //     "updated_at": "2011-11-26T15:45:26.130Z",
    //     "from_email": "jay1cameron@yahoo.com",
    //     "full_name": "Agawam Qualifier",
    //     "contact_name": "Jay Cameron"
    // }
