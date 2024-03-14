class Ex {
  constructor(public name: string, public email: string) {}
}

type para = ConstructorParameters<typeof Ex>;
