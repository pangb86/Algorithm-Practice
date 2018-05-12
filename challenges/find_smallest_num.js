class SmallestIntegerFinder {
  findSmallestInt(args) {
    var smallest = Infinity;

    for (var i = 0; i < args.length; i++) {
      if (args[i] < smallest) {
        smallest = args[i];
      }
    }

    return smallest;
  }
}
