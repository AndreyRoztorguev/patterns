class DBService{
    private static db: DBService;

    private constructor(){}

    public static getDB(){
        if(!DBService.db){
            DBService.db = new DBService();
        }
        return DBService.db;
    }

    public query(){
        // do some logic
    }      
}

function clientCode(){
    const db = DBService.getDB();
    db.query();
}

clientCode();