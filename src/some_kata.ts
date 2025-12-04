type Direction = 'N' | 'S' | 'E' | 'W';
export type Command = 'f' | 'b' | 'l' | 'r';

export class Rover {
    private x: number;
    private y: number;
    private direction: Direction;

    constructor(x: number, y: number, direction: Direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }

    getDirection(): Direction {
        return this.direction;
    }

    executeCommands(commands: Command[]): void {
        for(const command of commands) {
            this.execute(command);
        }
    }

    execute(command: Command): void {
        if (command === 'f') {
            this.moveForward();
        }
        if (command === 'b') {
            this.moveBackward();
        }
        if (command === 'r') {
            this.turnRight();
        }
        if (command === 'l') {
            this.turnLeft();
        }
    }

    private moveForward(): void {
        if(this.direction === 'N') {
            this.y += 1;
        }
        if (this.direction === 'S') {
            this.y -= 1;
        }
        if (this.direction === 'E') {
            this.x += 1;
        }
        if (this.direction === 'W') {
            this.x -= 1;
        }
    }

    private moveBackward(): void {
        if (this.direction === 'N') {
            this.y -= 1;
        }
        if (this.direction === 'S') {
            this.y += 1;
        }
        if (this.direction === 'E') {
            this.x -= 1;
        }
        if (this.direction === 'W') {
            this.x += 1;
        }
    }

    private turnRight(): void {
        if (this.direction === 'N') {
            this.direction = 'E';
        }
        else if (this.direction === 'E') {
            this.direction = 'S';
        } else if (this.direction === 'S') {
            this.direction = 'W';
        } else if (this.direction === 'W') {
            this.direction = 'N';
        }
    }

    private turnLeft(): void {
        if (this.direction === 'N') {
            this.direction = 'W';
        } else if (this.direction === 'W') {
            this.direction = 'S';
        } else if (this.direction === 'S') {
            this.direction = 'E';
        } else if (this.direction === 'E') {
            this.direction = 'N';
        }
    }

}