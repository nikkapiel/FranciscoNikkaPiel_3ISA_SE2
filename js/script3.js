function found (n, obj) {
    for (var i = 0; i < n.length; i++) {
        if (n[i] === obj) {
            return true;
        }
    }
    return -1;
}