/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "Number": {
        "type": "number"
    },
    "Boolean": {
        "type": "boolean"
    },
    "String": {
        "type": "string"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);

/**
 * Data storage
 */
Apperyio.storage = {

    "TransportRequest": new $a.LocalStorage("TransportRequest", "String"),

    "TransportDate": new $a.LocalStorage("TransportDate", "String"),

    "ChildRequest": new $a.LocalStorage("ChildRequest", "String"),

    "ChildDate": new $a.LocalStorage("ChildDate", "String"),

    "AboutMe": new $a.LocalStorage("AboutMe", "String")
};