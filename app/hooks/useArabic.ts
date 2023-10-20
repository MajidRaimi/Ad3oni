
const useArabic = () => {

    const corrector = async (text: string) => {

        const response = await fetch('https://cwg.sahehly.com/Diac/Sahehly', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': process.env.NEXT_PUBLIC_CORRECTOR_TOKEN ?? ''
            },
            body: JSON.stringify({
                type: "SSahahlyWebSite",
                gFlag: true,
                word: text
            })
        })

        const data = await response.json()

        console.log(data.diacWord)

        return data.diacWord

    }

    const tashkeel = async (text: string) => {

        const body = new FormData()
        body.append('sentence', text)

        const response = await fetch('https://backend.rdi-tashkeel.com:8000/tashkeel/performTashkeel', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': process.env.NEXT_PUBLIC_TASHKEEL_TOKEN ?? ''
            },
            body
        })


        const data = await response.json()
        console.log(data.lines[0])

    }




    return {
        corrector,
        tashkeel
    }

}

export default useArabic;