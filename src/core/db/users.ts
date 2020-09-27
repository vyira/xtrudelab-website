interface IUser {
    name: string,
    dob: Date,
    description?: string,
    dp?: string,
    tagline?: string,
    specialization?: string,
    roles?: string[]
}

const awatansa: IUser = {
    name: 'Awatansa Vishwakarma',
    dob: new Date("1995-03-22"),
    roles: [
        "Administrator", "Director", "Financer"
    ]
}
const sudip: IUser = {
    name: 'Sudip Soni',
    dob: new Date("1996-03-22"),
    roles: [
        "Administrator", "Director", "Head of Development"
    ]
}

export {
    awatansa,
    sudip,
}

