function foo(a, b) {
  if (a === null || b === null) {
    console.error("Null values not allowed for a and b.");
    return null; // or throw an error
  }
  // ... rest of the function
} 