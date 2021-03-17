export class Vector2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public static distance(a: Vector2, b: Vector2) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  }

  public static create(x: number, y: number) {
    return new Vector2(x, y);
  }
}
