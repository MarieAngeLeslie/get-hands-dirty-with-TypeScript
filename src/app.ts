function reverse<T>(arg: readonly T[]): T[] {
    return [...arg].reverse();
}

class Collection<T> {
    constructor(private items: Array<T>) {

    }

    add(item: T): this {
        this.items.push(item);
        return this
    }

    first(): T | null {
        return this.items[0] || null;
    }
}


class Point {
    x = 0;
    y = 0;
}

class Geometry {
    x = 0;
    y = 0;
    surface = 0;
}

function getX(p: Point) {
    return p.x;
}



const my_instance = new Collection([1, 2,]);
my_instance.first();