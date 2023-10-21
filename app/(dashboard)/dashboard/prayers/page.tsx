import { getPrayers } from "@/lib/prayers"
import { Prayer } from "@prisma/client";
import { TableRow } from "./components";



const page = async () => {

  const { prayers } = await getPrayers();

  return (
    <div className='bg-slate-50 h-full flex flex-col items-center justify-around w-full ' >
      {/* Header */}
      <h1>Prayers</h1>

      {/* Table */}
      <div className="overflow-x-auto ">
        <table className='table w-full text-center'>
          <thead className='bg-slate-200 text-black'>
            <tr>
              <th></th>
              <th>Plain Text</th>
              <th>Formatted Text</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className=''>
            {
              prayers?.map((prayer: Prayer, index: number) => {
                return (
                  <TableRow
                    key={prayer.id}
                    prayer={prayer}
                    index={index}
                  />

                )
              })
            }
          </tbody>

        </table>
      </div>

      <div></div>

    </div>
  )
}

export default page
