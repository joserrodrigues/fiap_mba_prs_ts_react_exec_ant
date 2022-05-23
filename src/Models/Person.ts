export interface AllPersons {
    persons: Person[]
}

export interface Person {
    _id: string,
    prodID: string,
    title: string,
    firstName: string,
    lastName: string,
    jobTitle: string,
    jobArea: string,
    jobDescriptor: string,
    jobType: string,
    address: string,
    zipCode: string,
    city: string,
    state: string,
    coutry: string,
    phone: string,
    CPF: string,
    latitude: number,
    longitude: number,
    image: string
}