
import Data from "./Data"

const New = () => {
    return ( <>
    {Data && Data.map((item) => {
        return (
            <>
                <div>{item.user}</div>
                <div>{item.email}</div>
            </>
        )
    })
}</>)
}

export default New
