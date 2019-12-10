class Vector {
    x = 0;
    y = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    //
    // operators
    //

    add(other) {
        let output = new Vector(
            this.x + other.x,
            this.y + other.y,
        );

        return output;
    }

    sub(other) {
        let output = new Vector(
            this.x - other.x,
            this.y - other.y,
        );

        return output;
    }

    div(other) {
        let output = new Vector(
            this.x / other.x,
            this.y / other.y,
        );

        return output;
    }
    
    mul(other) {
        let output = new Vector(
            this.x * other.x,
            this.y * other.y,
        );

        return output;
    }

    //
    // math
    //

    len() {
        // we take the x and y values to the power 2 and square the sum
        let output = sqrt(pow(this.x, 2) + pow(this.y, 2));
       
        return output;
    }

    normalize() {
        let output = this.div(vec_from_num(this.len()));

        return output;
    }
}

function vec_from_num(num) {
    return new Vector(num, num);
}