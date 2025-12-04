import { expect } from "@jest/globals"
import { Rover, type Command } from "./some_kata"

describe("Rover setup", () => {
  it("has initial position and direction", () => {
    const rover = new Rover(1, 2, "N");

    expect(rover.getX()).toBe(1);
    expect(rover.getY()).toBe(2);
    expect(rover.getDirection()).toBe("N");
  });
});

describe("Rover move forward", () => {
  it("increases y when facing North", () => {
    const rover = new Rover(0, 0, "N");

    rover.execute('f');


    expect(rover.getY()).toBe(1);
    expect(rover.getX()).toBe(0);
  });

  it("decreases y when moving backward facing south", () => {
    const rover = new Rover(0, 2, "S");
    
    rover.execute('f');

    expect(rover.getY()).toBe(1);
    expect(rover.getX()).toBe(0);
  });

  it("increases x when facing east and moving forward", () => {
    const rover = new Rover(0, 0, "E");

    rover.execute('f');

    expect(rover.getX()).toBe(1);
    expect(rover.getY()).toBe(0);
  });

  it("decreases x when facing west and moving forward", () => {
    const rover = new Rover(2, 0, "W");

    rover.execute('f');

    expect(rover.getX()).toBe(1);
    expect(rover.getY()).toBe(0);
  });
});

describe("Rover move backward", () => {
  it("decreases y when facing North and moving backward", () => {
    const rover = new Rover(0, 2, "N");

    rover.execute('b');

    expect(rover.getY()).toBe(1);
    expect(rover.getX()).toBe(0);
  });

  it(" increases y when facing South and moving backward", () => {
    const rover = new Rover(0, 0, 'S');

    rover.execute('b');

    expect(rover.getY()).toBe(1);
    expect(rover.getX()).toBe(0);
  });

  it("decreases x when facing East and moving backward", () => {
    const rover = new Rover(2, 0, 'E');

    rover.execute('b');

    expect(rover.getX()).toBe(1);
    expect(rover.getY()).toBe(0);
  });

  it("increases x when facing West and moving backward", () => {
    const rover = new Rover(0, 0, 'W');

    rover.execute('b');

    expect(rover.getX()).toBe(1);
    expect(rover.getY()).toBe(0);
  });
});

describe('Rover turn right', () => {
    it("faces East when turning right from North", () => {
      const rover = new Rover(0, 0, 'N');

      rover.execute('r');

      expect(rover.getX()).toBe(0);
      expect(rover.getY()).toBe(0);
      expect(rover.getDirection()).toBe('E');
    });

    it("faces South when turning right from East", () => {
      const rover = new Rover(0, 0, 'E');

      rover.execute('r');

      expect(rover.getX()).toBe(0);
      expect(rover.getY()).toBe(0);
      expect(rover.getDirection()).toBe('S');
    });

    it("faces West when turning right from South", () => {
      const rover = new Rover(0, 0, 'S');

      rover.execute('r');

      expect(rover.getX()).toBe(0);
      expect(rover.getY()).toBe(0);
      expect(rover.getDirection()).toBe('W');
    });

    it("faces North when turning right from West", () => {
      const rover = new Rover(0, 0, 'W');

      rover.execute('r');

      expect(rover.getX()).toBe(0);
      expect(rover.getY()).toBe(0);
      expect(rover.getDirection()).toBe('N');
    });
});

describe('Rover turn left', () => {
    it("faces West when turning left from North", () => {
      const rover = new Rover(0, 0, 'N');

      rover.execute('l');

      expect(rover.getX()).toBe(0);
      expect(rover.getY()).toBe(0);
      expect(rover.getDirection()).toBe('W');
    });

    it("faces North when turning left from East", () => {
      const rover = new Rover(0, 0, 'E');

      rover.execute('l');

      expect(rover.getX()).toBe(0);
      expect(rover.getY()).toBe(0);
      expect(rover.getDirection()).toBe('N');
    });

    it("faces East when turning left from South", () => {
      const rover = new Rover(0, 0, 'S');
      
      rover.execute('l');

      expect(rover.getDirection()).toBe('E');
      expect(rover.getX()).toBe(0);
      expect(rover.getY()).toBe(0);
    });

    it("faces South when turning left from West", () => {
      const rover = new Rover(0, 0, 'W');

      rover.execute('l');

      expect(rover.getDirection()).toBe('S');
      expect(rover.getX()).toBe(0);
      expect(rover.getY()).toBe(0);
    });
  });

  describe('execute multiple commands', () => {
    it('processes a sequence of commands', () => {
      const rover = new Rover(0, 0, 'N');

      const commands: Command[] = ['f', 'f', 'r', 'f'];

      rover.executeCommands(commands);

      expect(rover.getX()).toBe(1);
      expect(rover.getY()).toBe(2);
      expect(rover.getDirection()).toBe('E');
    });
  });
