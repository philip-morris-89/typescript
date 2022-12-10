/**
 * START: Follow the instructions below.
 */

 class Currency {
  // Add types for these fields and make them private.
  // Hint: Look at the type of values being passed when `new Currency()`
  // is called below.

  readonly name: string;
  readonly code: string;
  readonly symbol: string;

  // Add types to the constructor parameters.

  constructor(name: string, code: string, symbol: string) {
      this.name = name;
      // Store the `code` and `symbol` parameter values in
      // their corresponding class fields.
      this.code = code;
      this.symbol = symbol;

  }

  // Methods are public by default.
  // Add a visibility modifier to make it clear this method is public.
  //
  // Add a return type for this method
  // Hint: Look at the inferred return type.

  describe(): string {
      // Replace the `null` values below with the appropriate field values.
      // Hint: Access field values with: this.fieldName

      let description = `The ${this.name} currency `;
      description += `has the code ${this.code} `;
      description += `and uses the symbol ${this.symbol}.`;

      return description;
  }
}

// ----

const currencyNaira = new Currency("Naira", "NGN", "₦");
console.log(currencyNaira);
// Call the `describe()` method on the `currencyNaira` object.
const describeNaira = currencyNaira.describe();
console.log(describeNaira);

// ----

const currencyUsDollar = new Currency("United States dollar", "USD", "$");
console.log(currencyUsDollar);
// Call the `describe()` method on the `currencyUsDollar` object.
const describeUsDollar = currencyUsDollar.describe();
console.log(describeUsDollar);

// ----

export {};