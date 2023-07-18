import { useState } from "react";

interface Itest {
    data: Number,
    data2: String
}

const Test = () =>{

    const [data, setData] = useState<Itest>({
        data: 1,
        data2: 'test'
    });

    console.log(data)
    setData({
        data: 2,
        data2: 'abc'
    });

    return (
        <div>test</div>
    )
}

export default Test;