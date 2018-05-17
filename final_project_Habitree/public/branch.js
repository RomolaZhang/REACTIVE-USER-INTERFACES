"use strict";

class Branch {
  constructor(begin, end, angle, angle2, len) {
    this.begin = begin;
    this.end = end;
    this.finished = false;
    this.angle = angle;
    this.angle2 = angle2;
    this.len = len;
  }

  jitter() {
    this.end.x += random(-0.1, 0.1);
    this.end.y += random(-0.1, 0.1);
  }

  show() {
    stroke(104, 72, 16);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }

  branchA() {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(this.angle);
    dir.mult(this.len);
    var newEnd = p5.Vector.add(this.end, dir);
    var b = new Branch(this.end, newEnd, this.angle, this.angle2, this.len);
    return b;
  }

  branchB() {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-this.angle2);
    dir.mult(this.len);
    var newEnd = p5.Vector.add(this.end, dir);
    var b = new Branch(this.end, newEnd, this.angle, this.angle2, this.len);
    return b;
  }
}
