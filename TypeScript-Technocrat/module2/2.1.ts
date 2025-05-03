{
    //  type assertion

//     let anything: any;
//     anything = "nothing";
//    ( anything as boolean)

    const converter = (kg: string | number): string | number | undefined => {
        if ( typeof kg === "string") {
            const convertedKG = parseFloat(kg) * 1000;
            return `The Converted value is : ${convertedKG}`
        } else if (typeof kg === "number") {
            return kg * 1000
        }
    }

    const result1 = converter(1000) as number;
    const result2 = converter("1000") as string;


    type Custom = {
        message: string
    }

    try {

    } catch (err) {
        console.log((err as Custom).message)
    }
}