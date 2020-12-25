class Cat {
    constructor(name,speed,weight,) {
        this._name = name;
        this._status = true;
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
        return this.say + ' Meo Meo';
    }
    eat(that) {
        if (this._speed > that.speed) {
            this._weight += that._weight;
            that._weight--;
            this.speed++;
            return this._weight;
        }
    }
}