{
    // Learning Mapped Types in TypeScript

    const arrayNum: number[] = [1, 2, 3, 4]
    // const arrayStr: string[] = ["1", "2", "3", "4"] // manullay convert number to string

    // dynamically change type number to string using js map method
    const arrayStr: string[] = arrayNum.map((num: number) => num.toString())

    type AreaNumber = {
        width: number;
        height: number;    }


    type height = AreaNumber["height"] // look up
        // T => {width: number; height: string}
        // key => width | height
        // T[key] => T["width" or "height"]
    type AreaStr<T> = {
        [key in keyof T]: T[key]
    }


    const area: AreaStr<{width: number; height: string}> = {
        width: 50,
        height: "90"
    } 

}