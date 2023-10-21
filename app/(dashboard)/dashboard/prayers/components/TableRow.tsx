import { Prayer } from "@prisma/client"
import { Trash } from "lucide-react";


interface TableRowProps {
    prayer: Prayer;
    index: number;
}



const TableRow: React.FC<TableRowProps> = ({ prayer, index }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td className='max-w-sm'>{prayer.plainText}</td>
            <td>{prayer.formattedText}</td>
            <td>{prayer.status}</td>
            <td className="flex space-x-2">
                <Trash className='text-rose-500 text-sm' size={16}/>
            </td>
        </tr>
    )
}

export default TableRow
