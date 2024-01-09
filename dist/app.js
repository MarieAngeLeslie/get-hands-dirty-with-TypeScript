"use strict";
function reverse(arg) {
    return [...arg].reverse();
}
class Collection {
    constructor(items) {
        this.items = items;
    }
    add(item) {
        this.items.push(item);
        return this;
    }
    first() {
        return this.items[0] || null;
    }
}
class Point {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
class Geometry {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.surface = 0;
    }
}
function getX(p) {
    return p.x;
}
const my_instance = new Collection([1, 2,]);
my_instance.first();
