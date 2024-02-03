import { nameFormat, dateFormat } from "../../../formatters"

const StatusClient = ({ data }) => {
    return (
        <div className="bg-white w-full text-black text-sm font-semilight text-start p-4 rounded-md mt-2">
            {data.map((item, index) => (
                <div key={index} >
                    <div>Status: {item?.message}</div>
                    <div>Data: {dateFormat(item?.date) || item?.date}</div>
                </div>
            ))}

        </div>
    )
}
export default StatusClient