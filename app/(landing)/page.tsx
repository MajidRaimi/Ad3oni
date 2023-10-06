import { ComingSoonText } from './components'
import './styles.css'



export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center flex-col background text-white space-y-4 text-center px-4">
      <h1 className='font-bold text-4xl lg:text-5xl'>ادْعُونِي</h1>
      <h2 className='text-lg lg:text-xl font-light'>وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ ۚ إِنَّ الَّذِينَ يَسْتَكْبِرُونَ عَنْ عِبَادَتِي سَيَدْخُلُونَ جَهَنَّمَ دَاخِرِينَ</h2>
      <ComingSoonText/>
    </main>
  )
}
