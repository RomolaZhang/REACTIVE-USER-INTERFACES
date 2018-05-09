var tree = [];
var leaves = [];
var old_count = 0;
var old_id = 0;
var old_type = "seed";

function setup() {
  createCanvas(400, 400);
  var a = createVector(width / 2, height - 100);
  var b = createVector(width / 2, height - 200);
  var root = new Branch(a, b, window.angle, window.angle2, window.len);
  tree[0] = root;
}

function addBranch() {
  for (var i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].finished = true;
  }

  if (window.count >= 6) {
    for (var i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        var leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }
}

function change() {
  tree = [];
  leaves = [];
  var a = createVector(width / 2, height - 100);
  var b = createVector(width / 2, height - 200);
  var root = new Branch(a, b, window.angle, window.angle2, window.len);

  tree[0] = root;
  for (var i = 0; i < window.count; i++) {
    addBranch();
  }
  old_count = window.count;
  old_id = window.id;
  old_type = window.type;
}

function draw() {
  background(255);

  if (
    window.count !== old_count ||
    window.id != old_id ||
    window.type != old_type
  ) {
    change();
  }

  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
  }

  for (var i = 0; i < leaves.length; i++) {
    if (window.type == "seed") {
      fill(10, 134, 30, 100);
    } else {
      fill(255, 0, 100, 100);
    }

    noStroke();
    var x = leaves[i].x;
    var y = leaves[i].y;
    if (x <= 200) {
      var angle = map(x, 0, 200, 2 * PI / 3, PI);
    } else {
      var angle = map(x, 0, 200, -PI / 2, -PI / 3);
    }
    ellipse(leaves[i].x, leaves[i].y, 8, 8);
  }
}
