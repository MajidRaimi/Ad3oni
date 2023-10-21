import { getPrayers } from "@/lib/prayers"
import { Prayer } from "@prisma/client";



const page = async () => {

  const {prayers} = await getPrayers();

  return (
    <div>
      {prayers?.map((prayer: Prayer) => {
        return (
          <div key={prayer.id}>
            {prayer.plainText}
          </div>
        )
      })}
    </div>
  )
}

export default page
