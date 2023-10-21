import { getPrayers } from "@/lib/prayers"



const page = async () => {

  const {prayers} = await getPrayers();

  return (
    <div>
      {prayers?.map(prayer => {
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
