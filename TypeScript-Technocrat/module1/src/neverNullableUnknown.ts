{
    // ts-node ./module1/src/neverNullableUnknown.ts


    // Nullable Types

    const searchName = (name: string | null) => {
        let resultName;

        if (name) {
            console.log("We are Searching")
        } else {
            console.log("Nothing Found")
        }
    }
    // searchName(null)


    // unknown types

    const checkSpeed = (meter: unknown) => {
        if (typeof meter === "number") {
            const speed = (meter * 1000) / 3600
            console.log(`The Speed is ${speed} ms^-1`)
        } else if (typeof meter === "string") {
            const [value, unit] = meter.split(" ")
            const speed = (parseFloat(value) * 1000) / 3600
            console.log(`The Speed is ${speed} ms^-1`)
        }
    }

    // checkSpeed("150 kmh^-1")


    const throwError = (msg: string): never => {
        throw new Error(msg)
    }

    throwError("eye keysa huya")

}