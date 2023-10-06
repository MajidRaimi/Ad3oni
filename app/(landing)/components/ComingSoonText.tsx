'use client'
import Typewriter from "typewriter-effect"
import { Roboto } from "next/font/google"

const font = Roboto(
    { weight : '400', subsets : ['cyrillic'] }
  )

const ComingSoonText = () => {
    return (
        <h3>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Coming Soon...")
                        .pauseFor(1500)
                        .deleteChars(3)
                        .typeString("...")
                        .pauseFor(1500)
                        .deleteChars(3)
                        .typeString("...")
                        .start();
                }} />
        </h3>
    )
}

export default ComingSoonText
