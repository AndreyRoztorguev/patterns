
class Singleton {
    private static instance:Singleton;

    private constructor(){}

    public static getInstance(){
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

     /**
     * Наконец, любой одиночка может содержать некоторую бизнес-логику, которая
     * может быть выполнена на его экземпляре.
     */
     public someBusinessLogic() {
        // ...
    }

}

function clientCode(){
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    console.log(s1 === s2); // 'Singleton works, both variables contain the same instance.'
}

clientCode();