//- returns array of ConstructorParameters  of given class

class Example {
  constructor(public name: string, public email: string) {}
}

type params = ConstructorParameters<typeof Example>;
