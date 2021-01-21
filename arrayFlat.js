Array.prototype.flatten = function() {
  return this.reduce((a, b) => {
    return a.concat(Array.isArray(b) ? b.flatten() : b);
  }, []);
}

console.log([[1,4],2,3].flatten());