class Rat {
    constructor(name,speed,weight,) {
        this._name = name;
        this._status = status;
        this._speed = speed;
        this._weight = weight;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }
    say() {
        return this.say + ' Chit chit';
    }
}